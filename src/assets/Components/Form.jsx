

export default function Form(){



    return(
        <>
            <div>
                <h2 id="contactUs">Ready to make your imagination a reality? </h2>
                <form>
                    <input type="text" placeholder="Name" required/>
                    <input type="email" placeholder="Email" required/>
                    <input type="number" placeholder="Price Range" required/>
                    <input type="text" placeholder="Message" required/>
                </form>       
                <button>Submit</button>
            </div>
            
        </>
 
    )
}