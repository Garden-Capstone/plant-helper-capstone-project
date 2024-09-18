'use server'

export async function AddPlantButtonAction (values: any, actions: any) {
    const {setStatus} = actions
    const {lockerId, lockerProfileId, lockerPlantId, lockerImageUrl, lockerName} = values
    fetch('apis/locker/', {
        method: 'POST',
        body: JSON.stringify({lockerId, lockerProfileId, lockerPlantId, lockerImageUrl, lockerName}),
        headers: {
                'Content-Type': 'application/json',
        }
    }).then(response => {
        if (response.ok) {
            return response.json()
        }
        throw new Error('Network response was not ok')
    }).then(json => {
        let type = 'failure'
       setStatus({type, message: json.message})
    })
}