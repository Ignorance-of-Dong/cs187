import React from "react";
import "../common/text.css";
function Text () {

    const validInfo = () => {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\.\-])+\.)+([a-zA-Z]{2,4})+$/;
        var mail = document.querySelector('.email').value;
        var conhtml = document.querySelector('.error');
        if (filter.test(mail)) {
            conhtml.innerHTML = '<span class="green">Email successfully recorded</span>'
            return true;
        } else {
            conhtml.innerHTML = '<span class="red">Invalid email address</span>'
            return false;
        }
    }
    return <>
        <div>
            <h1>This is an email validation page</h1>
        </div>
        <div class="input_bar">
            <form onSubmit={() => validInfo()} method="GET" action="#">
                <label for="lname">Email</label><span class="error"></span><br/>
                <input type="email" class="email"/><br/>
                <input type="submit" value="Submit"/><br/>
            </form>
        </div>
    </>
}

export default Text;