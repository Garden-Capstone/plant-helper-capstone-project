// 'use server'
//
//
//
// import {setHeaders} from "@/utils/setHeaders";
//
// export async function AddPlantButtonAction (locker: any) {
//     xonst
//     const result = await fetch(`/apis/locker/`, {
//         method: "POST",
//         headers : await setHeaders(),
//         credentials: 'include',
//         body: JSON.stringify(locker)
//         }).then(response => {
//             if (response.ok) {
//                 return response.json()
//             } if (response.session === false) {
//                 router.push('/login')
//         }
//             throw new Error('Network response was not ok')
//         })
//
//     return result.status === 200? true : false
// }

