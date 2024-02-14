// import { Alert, Button, TextInput } from 'flowbite-react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { createAppointment } from '../api/appointments'; // Import your API function for creating appointments

// export default function CreateAppointment() {
//     const { currentUser } = useSelector((state) => state.user);
//     const [formData, setFormData] = useState({
//         title: '',
//         appointmentDate: new Date().toISOString().split('T')[0],
//         content: '',
//     });
//     const [publishError, setPublishError] = useState(null);
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const userId = currentUser._id;
//             const data = { ...formData, userId };
//             const response = await createAppointment(data); // Call your API function to create an appointment
//             if (response.ok) {
//                 navigate('/dashboard?tab=userappointment');
//             } else {
//                 const errorMessage = await response.text();
//                 setPublishError(errorMessage);
//             }
//         } catch (error) {
//             setPublishError('Something went wrong');
//         }
//     };

//     return (
//         <div className="p-3 max-w-3xl mx-auto min-h-screen">
//             <h1 className="text-center text-3xl my-7 font-semibold">
//                 Create an Appointment
//             </h1>
//             <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//                 <div className="flex flex-col gap-4 sm:flex-row justify-between">
//                     <TextInput
//                         type="text"
//                         placeholder="Title"
//                         required
//                         id="title"
//                         className="flex-1"
//                         value={formData.title}
//                         onChange={(e) =>
//                             setFormData({ ...formData, title: e.target.value })
//                         }
//                     />

//                     <TextInput
//                         type="date"
//                         placeholder="Appointment Date"
//                         required
//                         id="appointmentDate"
//                         min={new Date().toISOString().split('T')[0]}
//                         value={formData.appointmentDate}
//                         onChange={(e) =>
//                             setFormData({ ...formData, appointmentDate: e.target.value })
//                         }
//                     />
//                 </div>

//                 <ReactQuill
//                     theme="snow"
//                     placeholder="Write something..."
//                     className="h-72 mb-12"
//                     required
//                     value={formData.content}
//                     onChange={(value) => setFormData({ ...formData, content: value })}
//                 />

//                 <Button type="submit" gradientDuoTone="purpleToPink">
//                     Create Appointment
//                 </Button>

//                 {publishError && (
//                     <Alert className="mt-5" color="failure">
//                         {publishError}
//                     </Alert>
//                 )}
//             </form>
//         </div>
//     );
// }