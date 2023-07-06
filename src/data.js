import annonceur from "./img/annonceur.jpg";
import recruteur from "./img/recruteur.jpg";
export const posts = [
    {
        id : 1,
        title :"Recruteur" ,
        img : recruteur , 
        desc : " Un voyageur avisé choisit une compagnie solide. Rejoins-nous et ensemble, nous tracerons un chemin de succès.",
        longDesc :
        <form >
            <table>
                <tr>
                    <td>Nom de la societe :</td><td><input type="text" placeholder="nom" /></td>
                </tr>
                <tr>
                    <td>Adresse de la societe :</td><td><input type="longtext" placeholder="adresse" /></td>
                </tr>
                <tr>
                    <td>Email de la societe :</td><td><input type="text" placeholder="Email" /></td>
                </tr>
                <tr>
                    <td>Telephone de la societe :</td><td><input type="text" placeholder="Numero" /></td>
                </tr>
                <tr>
                    <td>Post recherche  :</td><td>
                        <select className="postrech">
                            <option value="option1" selected >Stage PFE (ingenieurie)</option>
                            <option value="option1" >Stage ingenieur</option>
                            <option value="option1"> Stage d'été</option>  
                            <option value="option1">Stage PFE (Licence)</option>
                            <option value="option1"> Stage technicien</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Description :</td><td><input type="text" placeholder="" /></td>
                </tr>
            
            
            </table>
            <button className="postuler">Entrer</button>
        </form>
    },
    {
        id : 2,
        title : "Annonceur",
        img : annonceur, 
        desc : "La sagesse réside dans la collaboration, et travailler avec vous serait une alliance bénie pour atteindre des sommets inégalés.",
        longDesc : 
        
        <form >
            <table>
                <tr>
            <td>Nom  :</td><td><input type="text" placeholder="nom" /></td>
                </tr>
                <tr>
            <td>Prenom :</td><td><input type="text" placeholder="prenom" /></td>
                </tr>
                <tr>
            <td>Email  :</td><td><input type="text" placeholder="Email" /></td>
                </tr>
                <tr>
            <td>Numero de telephone  :</td><td><input type="text" placeholder="numero" /></td>
                </tr>
                <tr>
            <td>diplome</td><td>
                        <select className="postrech">
                            <option value="option1" >ingenieur</option>
                            <option value="option1" >Technicien superieur</option>
                            <option value="option1" selected> Etudiant</option>
                            <option value="option1">Bac</option>
                        </select>
                    </td>
                </tr>
                <tr>
            <td>Domaine</td><td>
                        <select className="postrech">
                            <option value="option1">Informatique</option>
                            <option value="option1" >electrique </option>
                            <option value="option1" selected> mecanique</option>
                            <option value="option1">genie civil</option>
                        </select>
                    </td>
                </tr>
            
            
            </table>
            <button className="postuler">Rechercher</button>
        </form>
    }
]