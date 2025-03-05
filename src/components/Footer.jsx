
function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold">Algowords</h2>
                        <h4 className="font-bold">&copy; Algowords, All right reserved.</h4>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold">About Us</h2>
                        <p className="mt-2">We are a company dedicated to providing the best e-learning solutions.</p>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold">Contact</h2>
                        <ul className="mt-2">
                            <li>Phone: (123) 456-7890</li>
                            <li>Email: example@example.com</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold">Developers</h2>
                        <p className="mt-2">Made by NJAY, Harvey, and Princess.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer