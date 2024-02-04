import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import JobCommentSection from '../components/JobContactSection';

export default function Projects() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/jobs/getJobss');
      const data = await res.json();
      console.log(data)
      setPosts(data.Jobss);
    };
    fetchPosts();
  }, []);
  return (
    <div>

      {/* <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div> */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Jobs</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <div key={post._id} className='group relative w-full border border-teal-500 hover:border-2 h-[auto] overflow-hidden rounded-lg sm:w-[430px] transition-all'>

                  <div className='p-3 flex flex-col gap-2'>
                    <p className='text-lg font-semibold line-clamp-2'>{post.title}</p>
                    <span className='italic text-sm'>{post.category} ( {post.expiredDate.split('T')[0]} )</span>
                    <div
                      className='p-3 max-w-2xl mx-auto w-full post-content'
                      dangerouslySetInnerHTML={{ __html: post && post.content }}
                    ></div>

                    <JobCommentSection postId={post._id}/>

                  </div>
                </div>

              ))}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
