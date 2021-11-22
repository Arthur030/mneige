import React from 'react'
import './homePageCategories.css'

export const HomePageCategories = () => {
    return (
        <div>
            <h2>Categories</h2>
            <div className="categorie-container">
                <div className="categorie">
                    <img className="categorie-img" src="https://media.istockphoto.com/photos/saint-benezet-bridge-in-avignon-in-a-beautiful-summer-day-france-picture-id1250971698?b=1&k=20&m=1250971698&s=170667a&w=0&h=MY7izg_Amu215BbRnjgzfKgoeksPUecTQxJN7QRYjP4=" />
                    <h6 className="categorie-name">
                    Avignon    
                    </h6>
                </div>
                <div className="categorie">
                    <img className="categorie-img" src="https://www.frequence-sud.fr/admin/transfert_lieu/data/876.jpg" />
                    <h6 className="categorie-name">
                    Les Arenes d'Arles    
                    </h6>
                </div>
                <div className="categorie">
                    <img className="categorie-img" src="https://www.costacroisieres.be/content/dam/costa/inventory-assets/ports/MRS/mrs-marsiglia-port-1b.jpg.image.750.563.low.jpg" />
                    <h6 className="categorie-name">
                    Marseille
                    </h6>
                </div>
            </div>
            
        </div>
    )
}
