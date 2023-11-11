import { useState } from 'react';

function CreateUser() {
    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [lang, setLang] = useState("");

    function getFormData(e) {
        e.preventDefault();

        console.log({
            name: name,
            tnc: tnc,
            lang: lang
        });
    }

    return (
        <>
            <h1>Create User</h1>

            <form onSubmit={getFormData}> 
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" /> <br />

                <select onChange={(e) => setLang(e.target.value)} name="programming" id="programming">
                    <option value="php">PHP</option>
                    <option value="javascript">Javascript</option>
                    <option value="python">Python</option>
                </select>

                <br />
                <input type="checkbox" value={0} onChange={(e) => setTnc(e.target.checked)} name="accept" id="accept" />  <label htmlFor="accept">Accept the terms and conditions</label><br />

                <button type="submit">Submit</button> <br />
            </form>
        </>
    );
}

export default CreateUser;