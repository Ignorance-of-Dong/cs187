import React from "react";
import "../common/text.css";
function Text () {
    return <>
        <center>
        <table border="1" width="90%" position="relative"  >
            <tr>
            <th></th>
                <th>name</th>
                <th>birthday</th>
                <th>school</th>
                <th>hometown</th>
                <th>job</th>
                <th>language</th>
                <th>Project Link</th>
            </tr>

            <tr>
                <th>1</th>
                <td>Brandon</td>
                <td>1999-06-18</td>
                <td>UCSB</td>
                <td>China</td>
                <td>Backend engineer</td>
                <td>C++</td>
                <td><a href="https://aliabdaal.com/">https://aliabdaal.com/</a></td>
            </tr>

            <tr>
                <th>2</th>
                <td>Anna</td>
                <td>1983-11-12</td>
                <td>UCLA</td>
                <td>China</td>
                <td>Frontend engineer</td>
                <td>C</td>
                <td><a href="https://joshkaufman.net/">https://joshkaufman.net/</a></td>
            </tr>

            <tr>
                <th>3</th>
                <td>Tim</td>
                <td>2000-01-06</td>
                <td>UCI</td>
                <td>England</td>
                <td>Frontend engineer</td>
                <td>Java</td>
                <td><a href="http://grantbaldwin.com/">http://grantbaldwin.com/</a></td>
            </tr>
            <tr>
                <th>4</th>
                <td>Tim</td>
                <td>2000-01-06</td>
                <td>UCI</td>
                <td>Japan</td>
                <td>Backend engineer</td>
                <td>Go</td>
                <td><a href="https://www.soundsgoodcopy.com/">https://www.soundsgoodcopy.com/</a></td>
            </tr>
            <tr>
                <th>5</th>
                <td>Tim</td>
                <td>2000-01-06</td>
                <td>UCI</td>
                <td>Korea</td>
                <td>Web development engineer</td>
                <td>Python</td>
                <td><a href="http://www.alkavadlo.com/">http://www.alkavadlo.com/</a></td>
            </tr>
        </table>
    </center>
    </>
}

export default Text;