function Rest() {

    return (
        <>
            <div>
                <h1>Restaurent</h1>

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTssAUbI4cH1bktHxb9wfIUCA2NbRb-FTTxmw&s" alt="" width={200} height={200}/>

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZWxF857wSQn-JXkXtibHxZpX4xmyj1p6tA&s" alt="" width={200} height={200}/>

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuqQS4wqE0tmSUxFS_ByjZqLCUTHySyGJ65A&s" alt="" width={200} height={200}/>

                <p>The restaurant served Italian cuisine, with a focus on homemade pasta and wood-fired pizzas. We ordered a couple of dishes, including a margherita pizza, a pasta with bolognese sauce, and a side of garlic bread. The pizza was perfectly cooked with a crispy crust, and the pasta was al dente, cooked just right. The bolognese sauce was flavourful and the garlic bread was fresh and warm.</p>

                <tr>
                    <th>Veg Menu</th>
                </tr>
                <tr>
                    <td>
                        <ol>
                        <li>Panner</li>
                        <li>Veg Biryani</li>
                        <li>Mushroom</li>
                        </ol>
                    </td>

                    <td>
                        <li>180</li>
                        <li>250</li>
                        <li>150</li>
                    </td>
                </tr>

                <tr>
                    <th>Non-Veg Menu</th>
                </tr>
                <tr>
                    <td>
                        <ol>
                        <li>Chicken Biryani</li>
                        <li>Mutton Biryani</li>
                        <li>Fish Fry</li>
                        </ol>
                    </td>
                    <td>
                        <li>280</li>
                        <li>350</li>
                        <li>200</li>
                    </td>
                </tr>
                 
                 <h3>Disclaimer:</h3>
                <p>Please inform your server of any food allergies or dietary restrictions before placing your order. While we make every effort to accommodate special dietary needs, our kitchen handles ingredients including nuts, gluten, dairy, and seafood. We cannot guarantee the absence of cross-contamination.</p>
            </div>
        </>
    )
}

export default Rest;