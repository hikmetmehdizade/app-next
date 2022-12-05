import { UserIcon } from '@heroicons/react/24/outline';
import cn from 'classnames';
import { ImgHTMLAttributes } from 'react';

type ImgSizes = 's' | 'm' | 'l' | 'xl';

const IMAGE_SIZES = {
  s: 'h-6 w-6',
  m: 'h-8 w-8',
  l: 'h-10 w-10',
  xl: ''
} as Record<ImgSizes, string>;

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: ImgSizes;
}

const Avatar = ({ size = 'l', className, src, ...props }: AvatarProps) => (
  <div className={cn('overflow-hidden rounded-full bg-slate-200', IMAGE_SIZES[size], className)}>
    {!src ? <UserIcon className='w-full h-full'/> : <img className="w-full h-full"  src={src} {...props} />}
  </div>
);

export default Avatar;
