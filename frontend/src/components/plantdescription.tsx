

export default function PlantDescription() {

    return (
        <>
            <div className="bg-[#F9F7EF]">
                <div className="text-2xl md:text-7xl mt-12 ml-14 text-[#2C6E49] bg-[#F9F7EF]">
                    <h2>Plant Name </h2>
                    <div className="text-xl md:text-4xl md:ml-14 text-[#E5C062]">
                        <span>Plant Scientific Name</span>
                    </div>
                </div>
                <div className="mx-14 mt-9 md:text-lg text-sm bg-[#F9F7EF] text-[#2C6E49]">
                    <span>This is a placeholder paragraph for the plant description. The rest is just a bob ross ipsum. Don't hurry. Take your time and enjoy. A thin paint will stick to a thick paint. Don't forget to tell these special people in your life just how special they are to you. This is an example of what you can do with just a few things, a little imagination and a happy dream in your heart. A tree needs to be your friend if you're going to paint him. You have to make those little noises or it won't work.</span>
                </div>
            </div>
            {/*care instruction*/}
            <div className="font-lg grid grid-cols-1 md:grid-cols-4 mt-10">
                <div className="mt-4 mx-10">
                    <h3 className="text-2xl font-semibold mb-2 text-[#2C6E49]">Watering</h3>
                    <p className="text-sm mb-3 text-[#2E8B57]">
                        Placeholders for watering instructions.
                    </p>
                </div>
                <div className="mt-4 mx-10">
                    <h3 className="text-2xl font-semibold mb-2 text-[#2C6E49]">Soil</h3>
                    <p className="text-sm mb-3 text-[#2E8B57]">
                        Placeholders for soil instructions.
                    </p>
                </div>
                <div className="mt-4 mx-10">
                    <h3 className="text-2xl font-semibold mb-2 text-[#2C6E49]">Light</h3>
                    <p className="text-sm mb-3 text-[#2E8B57]">
                        Placeholder for lighting instructions.
                    </p>
                </div>
                <div className="mt-4 mx-10">
                    <h3 className="text-2xl font-semibold mb-2 text-[#2C6E49]">Temperature</h3>
                    <p className="text-sm mb-3 text-[#2E8B57]">
                        Placeholder for temperature instructions.
                    </p>
                </div>
            </div>
        </>
    )
}