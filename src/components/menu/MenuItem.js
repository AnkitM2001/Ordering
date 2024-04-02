export default function MenuItem() {

    return(
        <div className="bg-gray-300 p-4 rounded-lg text-center group hover:bg-white hover:shadow-mdl hover:shadow-black/75 transition-all ">
            <div className="text-center">
                <img src ="/pizza.png" className="max-h-auto naxh-24 block mx-auto" alt="pizza" />
                </div>
                <h4 className="font-semibold txt-xl my-3"> Veg pizza</h4>
                <p className="text-gray-500 text-sm">
                    Heloo every one how are you this about site
                </p>
                <button className= " mt-4 bg-primary text-white rounded-full px-8 py-2">
                    Add to cart Rs 200
                </button>
            </div>
    )
}