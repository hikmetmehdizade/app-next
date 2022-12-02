import { getCookie } from 'cookies-next';
import { io } from 'socket.io-client';

class SocketIO {
  private socket = io('http://localhost:5000', {
    path: '/socket',
    transports: ['websocket'],
    auth: {
      token: getCookie('auth_access_token'),
    },
  });
  constructor() {
    this.socket.on('connect', () => {
      console.log('Socket connection');
    });

    this.socket.on('disconnect', () => {
      console.log('Socket disconnected');
    });
    this.connect();
  }
  public connect() {
    this.socket.connect();
  }

  public disconnect() {
    this.socket.disconnect();
  }
}

export { SocketIO };
export default new SocketIO();
