import Image from 'next/image'

function Post() {
  return (
    <div className='p-2'>
      <img
        src='/R.jpeg'
        />
    </div>
  );
}

export default function Start() {
  return (
    <main className='flex'>
      <section className='w-1/6 h-screen bg-red-800 fixed'>
        <div className='relative mx-7 top-10'>
        <div className=''>Instagram</div>
        <div className='flex flex-col items-center relative top-10'>
        <div className='flex items-center '><img src='/icons/home.png' className='w-1/6 mx-1 my-4'/>Home</div>
        <div className='flex items-center '><img src='/icons/search.png' className='w-1/6 mx-1 my-3'/>Search</div>
        <div className='flex items-center '><img src='/icons/explore.png' className='w-1/6 mx-1 my-4'/>Explore</div>
        <div className='flex items-center '><img src='/icons/reels.png' className='w-1/6 mx-1 my-3'/>Reels</div>
        <div className='flex items-center '><img src='/icons/message.png' className='w-1/6 mx-1 my-4'/>Messages</div>
        <div className='flex items-center '><img src='/icons/notification.png' className='w-1/6 mx-1 my-3'/>Notification</div>
        <div className='flex items-center '><img src='/icons/home.png' className='w-1/6 mx-1 my-4'/>Create</div>
        <div className='flex items-center '><img src='/icons/home.png' className='w-1/6 mx-1 my-3'/>Profile</div>
        </div>
        {/* <div className=''><img src=''/>More</div> */}
        </div>
      </section>
      <section className='w-5/6 right-0 absolute'>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </section>
    </main>
  )
}
