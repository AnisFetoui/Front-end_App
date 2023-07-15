import annonceur from "./img/annonceur.jpg";
import recruteur from "./img/recruteur.jpg";
export const posts = [
    {
        id : 1,
        title :"Job recruiter" ,
        img : recruteur , 
        desc : " A wise traveler chooses a solid company. Join us and together we will chart a path to success.",
        longDesc :
        <form >
            <table>
                <tr>
                    <td>Company Name :</td><td><input type="text" placeholder="Name" /></td>
                </tr>
                <tr>
                    <td>Company address :</td><td><input type="longtext" placeholder="Address" /></td>
                </tr>
                <tr>
                    <td>Company Email :</td><td><input type="text" placeholder="Email" /></td>
                </tr>
                <tr>
                    <td>Company phone : </td><td><input type="text" placeholder="Number" /></td>
                </tr>
                <tr>
                    <td>Post :</td><td>
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
            <button className="postuler">Enter</button>
        </form>
    },
    {
        id : 2,
        title : "Job announcer",
        img : annonceur, 
        desc : "Wisdom lies in collaboration, and working with you would be a blessed alliance in reaching unparalleled heights.",
        longDesc : 
        
        <form >
            <table>
                <tr>
            <td>First Name  :</td><td><input type="text" placeholder="First Name" /></td>
                </tr>
                <tr>
            <td>Last Name :</td><td><input type="text" placeholder="Last Name" /></td>
                </tr>
                <tr>
            <td>Email  :</td><td><input type="text" placeholder="Email" /></td>
                </tr>
                <tr>
            <td>Phone Number  :</td><td><input type="text" placeholder="Number" /></td>
                </tr>
                <tr>
            <td>diploma :</td><td>
                        <select className="postrech">
                            <option value="option1" >ingenieur</option>
                            <option value="option1" >Technicien superieur</option>
                            <option value="option1" selected> Etudiant</option>
                            <option value="option1">Bac</option>
                        </select>
                    </td>
                </tr>
                <tr>
            <td>Domain :</td><td>
                        <select className="postrech">
                            <option value="option1">Informatique</option>
                            <option value="option1" >electrique </option>
                            <option value="option1" selected> mecanique</option>
                            <option value="option1">genie civil</option>
                        </select>
                    </td>
                </tr>
            
            
            </table>
            <button className="postuler">Search</button>
        </form>
    }
]