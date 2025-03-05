import Modals from "../components/quizmodal.jsx";
import Button from "../components/button.jsx";
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function FigureOfSpeech() {
    const context = {
        Title: "Figure Of Speech",
        p1: "A figure of speech is a word or phrase that possesses a separate meaning from its literal definition. It can be a metaphor or simile, designed to make a comparison. It can be the repetition of alliteration or the exaggeration of hyperbole to provide a dramatic effect. In truth, there are a wealth of these literary tools in the English language. Here are 20 of them.",
        imgsrc1: "",
        p2: "1. Simile\n2. Metaphor\n3. Personification\n4. Hyperbole\n5. Understatement\n6. Paradox\n7. Oxymoron\n8. Irony\n9. Allusion\n10. Euphemism\n11. Pun\n12",

    }


    const QA = {
        Question1: "",
        MultipleAnswer: "",
        Answer: "",
    };

    const handleClick = () => {
        <Modals getQuestion={QA}/>
    }

    return (
        <>
            <Header />
            <Nav />
            <h1 className="text-center">FIGURE OF SPEECH</h1>
            <hr className="my-4"/>
            <section className="text-center">
                <div>
                    <h2 className="text-xl font-bold">Introduction</h2>
                    <p>{context.p1}</p>
                </div>
                <img src="" alt="image" className="mx-auto my-4"/>
                <p>{context.imgsrc1}</p>
            </section>
            <section className="text-center">
                <h2 className="text-xl font-bold">Types of Figure of Speech</h2>
                <p>{context.p2}</p>
            </section>
            <Button text={"Start Quiz"} callback={handleClick()} className="mx-auto my-4"></Button>
            <Footer/>
        </>
    );
}

export default FigureOfSpeech;