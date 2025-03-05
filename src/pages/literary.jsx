import Header from '../components/Header';
import Footer from '../components/Footer';

function Literacy() {

    const context = {
        Title: "Literacy",
        IntroParagraph: "",
        Article1: "",
        Article2: "",
        Article3: "",
        Article4: "",

        ItemNames: [
            ItemName1, [""],
        ],


        ImageSrc1: "",

        SubTitle: "Poetry",
        SubTitle2: "",
        SubTitle3: "",
        Note: "",
    };

    return (
        <>
            <Header />
            <h1 className="text-center text-4xl">{context.Title}</h1>
            <hr/>
            <section className="font-sans">
                <div>
                    <h2 className="mb-2">Introduction</h2>
                    <p>{context.IntroParagraph}</p>
                </div>
                <img src={context.ImageSrc1} alt="xx" />
                <p>Source: Example Source</p>
            </section>
            <section>
                <h2>{context.SubTitle}</h2>
                <div>
                    <h3>{context.SubTitle2}</h3>
                    <p>{context.Article1}</p>
                </div>
                <div>
                    <h3>Assonance</h3>
                    <p>{context.Article2}</p>
                </div>
                <div>
                    <h3>{context.SubTitle3}</h3>
                    <p>{context.Article3}</p>
                </div>
                <div>
                    <h3>{context.SubTitle4}</h3>
                    <p>{context.Article4}</p>
                </div>
                <img src="https://example.com/image2.jpg" alt="Examples of Sound Devices" />
                <p>Source: Example Source</p>
            </section>
            <Footer/>
        </>
    );
}

export default Literacy;