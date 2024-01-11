import Button from '@/components/buttons'
import Avatar from '@/components/avatars'
import Image from 'next/image'

export default function Home() {
  return (
    <>
        {/* <Button color='red' radius='pill'>Hello</Button> */}
        <div className='p-6'>
        <Avatar size='lg' radius='circle' notification_dot src={'/profile-image.jpeg'} alt='profile-photo' />

        </div>
    </>
  )
}
