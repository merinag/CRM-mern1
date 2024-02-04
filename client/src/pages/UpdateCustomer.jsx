import { Alert, Button, Label, TextInput } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import OAuth from '../components/OAuth';

export default function UpdateCustomer() {
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const { postId } = useParams();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.user);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch(`/api/user/getusers?userId=${postId}`);
                const data = await res.json();
                if (!res.ok) {
                    console.log(data.message);
                    setErrorMessage(data.message);
                    return;
                }
                if (res.ok) {
                    console.log(data);
                    setErrorMessage(null);
                    setFormData(data.users[0]);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        if (currentUser.isAdmin) {
            fetchUsers();
        }
    }, [currentUser.isAdmin, postId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`/api/user/update/${currentUser._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (!res.ok) {
                setErrorMessage(data.message);
                return;
            }
            if (res.ok) {
                setErrorMessage(null);
                setFormData(data)
                navigate('/dashboard?tab=customer');
            }
        } catch (error) {
            setErrorMessage('Something went wrong');
        }
    };

    return (
        <div className='min-h-screen mt-20'>
            <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
                {/* left */}
                <div className='flex-1'>
                    <Link to='/' className='font-bold dark:text-white text-4xl'>
                        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                            CRM
                        </span>
                    </Link>
                    <p className='text-sm mt-5'>Edit Customer</p>
                </div>
                {/* right */}
                <div className='flex-1'>
                    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                        <div>
                            <Label value='Your username' />
                            <TextInput
                                type='text'
                                placeholder='Username'
                                id='username'
                                onChange={(e) =>
                                    setFormData({ ...formData, username: e.target.value })
                                }
                                value={formData.username || ''}
                            />
                        </div>
                        <div>
                            <Label value='Your email' />
                            <TextInput
                                type='email'
                                placeholder='name@company.com'
                                id='email'
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                value={formData.email || ''}
                            />
                        </div>
                        <div>
                            <Label value='Your password' />
                            <TextInput
                                type='password'
                                placeholder='Password'
                                id='password'
                                onChange={(e) =>
                                    setFormData({ ...formData, password: e.target.value })
                                }
                                value={formData.password || ''}
                            />
                        </div>
                        <Button type='submit' gradientDuoTone='purpleToPink'>
                            Edit Customer
                        </Button>
                    </form>
                    {errorMessage && (
                        <Alert className='mt-5' color='failure'>
                            {errorMessage}
                        </Alert>
                    )}
                </div>
            </div>
        </div>
    );
}