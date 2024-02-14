import { Button } from 'flowbite-react';
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom'
export default function About() {
  const redirectToEmail = () => {
    const email = 'merinagetachew04@gmail.com';
    const subject = 'Hello';
    const body = 'This is the body of the email.';

    // Construct the mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Redirect the user to their email client
    window.location.href = mailtoLink;
  };
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About CRM'
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to crm!We are AddisWay Technology Solution! We are an emerging ICT company mainly focused on finding technological solution for our customers. We bring technological solution by new understanding and new approaches, that is way we are called Addisway
            </p>

            <p>
              On this blog, you'll find weekly articles and tutorials on topics
              such as web development, software engineering, and programming
              languages. CRM is always learning and exploring new
              technologies, so be sure to check back often for new content!
            </p>
            <h1 className='text-3xl text-white  font font-semibold text-center my-7'>
              VALUE
            </h1>
            <p>
              We value our customers, and we strive to give them high tech solutions for every problem they bring; We value our staffs, and we believe they are the back bone of our company and they deserve to get a better life technologically and economically and we value technology, that’s why we are always appreciating, learning and falling in love with it.
            </p>
            <div className='flex gap-10 items-center justify-center'>
              <p className='text-amber-100'>CONTACT NO:+25153279186</p>
              <Button outline gradientDuoTone='purpleToBlue' type='submit'>

                <button onClick={redirectToEmail}>contact to Email</button>

              </Button>
            </div>
            <div className='flex gap-10 items-center justify-center'>
              <Link to='https://www.instagram.com/direct/inbox/'>
                <RiInstagramFill className="text-amber-100 w-10 h-10" />
              </Link>

              <Link to='https://www.instagram.com/direct/inbox/'>
                <FaTelegramPlane className="text-amber-100 w-10 h-10" />
              </Link>

              <Link to='https://github.com/merinag/CRM-mern1'>
                <FaGithub className="text-amber-100 w-10 h-10" />
              </Link>

            </div>
            <img src="https://addisway.com/wp-content/uploads/2022/09/feat-ankil-desai-architect-e1663137889755.jpg" />

          </div>
        </div>
      </div>
    </div >
  );
}
