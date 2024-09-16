'use client'
import {Profile, ProfileSchema} from "@/utils/models/profile/profile.validator";
import {z} from "zod";
import {useRouter} from "next/navigation";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {Button, Label, Modal} from "flowbite-react";
import {DisplayError} from "@/app/components/DisplayError";
import {DisplayStatus} from "@/app/components/navigation/DisplayStatus";
import Link from "next/link";
import {useState} from "react";



type Props = {
    authorization: string|undefined,
    profile: Profile;
}

const FormSchema = ProfileSchema
    .pick({profileUsername: true, profileGoal: true})
    .extend({profileImage: z.any().optional()
    })

type FormSchema = z.infer<typeof FormSchema>

export default function EditProfileForm({ authorization, profile } : Props) {
    const router = useRouter()

    if (authorization === undefined) {
        return <></>
    }

    const handleSubmit = (formValues: FormSchema, actions: FormikHelpers<FormSchema>) => {
        const {profileUsername, profileGoal, profileImage} = formValues;
        const {setStatus, resetForm} = actions;

        fetch(`/apis/profile/${profile.profileId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authorization ?? "",
            },
            body: JSON.stringify(formValues)
        }).then(
            (response: Response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Network response was not ok.')
            }).then((json) => {
            let type = 'failure'
            if (json.status === 200) {
                resetForm()
                type = 'success'
                router.push('/plant-locker')
                router.refresh()
            }
            setStatus({type, message: json.message})
        })
    }

    return (
        <Formik
            initialValues={{profileGoal: profile.profileGoal, profileUsername: profile.profileUsername, profileImage: profile.profileImage, profileId: profile.profileId}}
            onSubmit={handleSubmit}
            validationSchema={toFormikValidationSchema(FormSchema)}>
            {EditProfileFormContent}
        </Formik>
    )
}

export function EditProfileFormContent(props: FormikProps<FormSchema>) {
    const {
        status,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const router = useRouter();


    const handleLogout = async () => {
        try {
            const response = await fetch('/apis/sign-out', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                router.push('/login');
            } else {
                console.error('Failed to log out');
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };


    {/*This section is the code for the picture*/}
    const [profilePic, setProfilePic] = useState("https://images.unsplash.com/photo-1611866759729-0cba525f9b45?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100");

    {/*This code is for the picture selection*/}
    const handlePictureSelect = ({url}: { url: any }) => {
        setProfilePic(url);
    };

    {/*Image placeholder array*/}
    const pictures = [
        "https://images.unsplash.com/photo-1516048015710-7a3b4c86be43?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100",

        "https://images.unsplash.com/photo-1509937528035-ad76254b0356?q=80&w=1624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100",

        "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100",

        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100",

        "https://images.unsplash.com/photo-1504280335916-c3e24a215b8b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100",

        "https://images.unsplash.com/photo-1611866759729-0cba525f9b45?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100",
    ];

    return (
        <>
            <div className="flex flex-col items-center justify-center bg-[#f9f7ef]">
                <div className="flex flex-col items-center mx-14 my-10">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-40 h-40 rounded-full border-2 border-[#f9f7ef]"/>
                    <div>
                        <Button
                            className="text-sm mt-12 bg-[#F09999] border-lg border-[#f7b8b7] enabled:hover:bg-[#f7b8b7] focus:ring-2 focus:ring-[#f7b8b7]"
                            aria-label="Change Profile Picture"
                            type="submit"
                            onClick={() => setIsModalOpen(true)}>
                            Change Picture
                        </Button>
                    </div>
                </div>
            </div>
            {/* Picture Selection Modal */}
            <Modal id='sign-up-modal' show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Header className="bg-[#f9f7ef] text-[#2c6e49]">Select a Profile Picture</Modal.Header>
                <Modal.Body className="bg-[#f9f7ef] text-[#2c6e49]">
                    <div
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 w-full justify-items-center bg-[#f9f7ef]">
                        {pictures.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                alt={`Profile option ${index + 1}`}
                                className="w-20 h-20 cursor-pointer border-2 border-[#f9f7ef] rounded-full"
                                onClick={() => handlePictureSelect({url: url})}
                            />
                        ))}
                    </div>
                </Modal.Body>
            </Modal>
            {/* Form Section */}
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="profileImage" value={profilePic}/>
            <div className="bg-[#f9f7ef]">
                <div className="flex max-w-xl flex-col mx-auto gap-7 bg-[#f9f7ef]">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="small"
                                   className="text-md"
                                   value="Username"/>
                        </div>
                        <textarea
                            id="profileUsername"
                            className="p-2 border border-[#f9f7ef] bg-white rounded-lg w-full h-11 resize-none overflow-hidden"
                            placeholder="Enter first name here.."
                            required
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.profileUsername}/>
                        <DisplayError errors={errors} touched={touched} field={'profileName'}/>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="large"
                                className="text-md"
                                value="What are your plant goals?"/>
                        </div>
                        <textarea
                            className="p-4 mb-4 rounded-lg border w-full h-32 bg-white border-[#f9f7ef] resize-none overflow-hidden"
                            placeholder="Enter your goals here..."
                            id="profileGoal"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.profileGoal ?? ""}
                            name={'profileGoal'}/>
                        <DisplayError errors={errors} touched={touched} field={'profileGoal'}/>
                    </div>
                </div>
            </div>
            {/*Save Changes Button*/}
            <div className="flex flex-col items-center justify-center bg-[#f9f7ef]">
                <Button
                    className="text-sm flex flex-col items-center bg-[#F09999] enabled:hover:bg-[#f7b8b7] focus:ring-2 focus:ring-[#f7b8b7] mx-14 mt-10 mb-7"
                    type="submit"
                    aria-label="Save Changes">
                    Save Changes
                </Button>
            </div>
            {/* Log Out Button */}
            <div className="flex flex-col items-center justify-center bg-[#f9f7ef]">
                <Link href="/login">
                    <Button
                        className="text-sm flex flex-col items-center bg-[#DAA520] enabled:hover:bg-[#E5C062] focus:ring-2 focus:ring-[#E5C062] mx-14 mt-10 mb-14"
                        aria-label="Log Out"
                        onClick={handleLogout}>
                        Log Out
                    </Button>
                </Link>
            </div>
            </form>
            <DisplayStatus status={status} />
        </>
    )
}




