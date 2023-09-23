import Slider from "../../Component/Slider/Slider"

function Home() {
    return(
        <section className="border mt-[5%] w-full items-center flex flex-col">
        <div className="flex gap-10 w-[95%]">
        <div className="w-[50%]">
            <h1 className="text-5xl">Hello World</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cupiditate eveniet quod pariatur molestias dolores a praesentium maiores nisi! Incidunt sapiente ab magni laboriosam omnis?</p>
        </div>
        <Slider/>
        
        
        </div>
        </section>
    )
}

export default Home