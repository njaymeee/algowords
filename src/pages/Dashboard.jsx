import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Nav from '../components/nav.jsx';
import Card from '../components/card.jsx';

import React from 'react';

const Dashboard = () => {

    const LessonIdsCompiler = [
        { Id: 1, title: "English (For Grade 9)", img: "../assets/literaturelogo 1.png", description: "English lessons", Link: "/english" },
        { Id: 2, title: "Programming (For Grade 8)", img: "../assets/computerlogo 1.png", description: "Programming Lessons", Link: "/programming" }
    ];

    return (
        <>
            <Header/>
            <Nav/>
            <section className="flex flex-col items-center">
                <div className="w-3/4">
                    <h2 className="text-2xl">All Courses</h2>
                    <div className="flex flex-wrap">
                        {LessonIdsCompiler.map((item) => (
                            <div key={item.Id} className="w-1/2 p-2">
                                <Card img={item.img} title={item.title} description={item.description} Link={item.Link} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer/>
        </>  
    );
};

export default Dashboard;