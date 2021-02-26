import React from "react";
import "../common/text.css";
function Text () {
    return <>
        <div>
            <h1>This is an introduction of dynymic programming</h1>
        </div>
        <div class="input_bar">
            <ul>
                <h3><li>Dynamic Programming (DP) is an algorithmic technique for solving an optimization problem by breaking it down into simpler subproblems and utilizing the fact that the optimal solution to the overall problem depends upon the optimal solution to its subproblems.</li></h3>
                <h3><li>Let’s take the example of the Fibonacci numbers. As we all know, Fibonacci numbers are a series of numbers in which each number is the sum of the two preceding numbers. The first few Fibonacci numbers are 0, 1, 1, 2, 3, 5, and 8, and they continue on from there.
                    <br/>
                    If we are asked to calculate the nth Fibonacci number, we can do that with the following equation,
                    <br/>
                    Fib(n) = Fib(n-1) + Fib(n-2), for n `{'>'}` 1
                    <br/>
                    As we can clearly see here, to solve the overall problem (i.e. Fib(n)), we broke it down into two smaller subproblems (which are Fib(n-1) and Fib(n-2)). This shows that we can use DP to solve this problem.</li></h3>
                <h3><li>Before moving on to understand different methods of solving a DP problem, let’s first take a look at what are the characteristics of a problem that tells us that we can apply DP to solve it.</li></h3><br/>

            </ul>
            <form onSubmit="return validInfo()" method="GET" action="#">
                <label for="fname">First name:</label><br/>
                <input type="text" id="fname" name="fname"/><br/>
                <label for="lname">Last name:</label><br/>
                <input type="text" id="lname" name="lname"/><br/>
            </form>
            <form>
                <input type="radio" id="male" name="gender" value="male"/>
                <label for="male">Male</label><br/>
                <input type="radio" id="female" name="gender" value="female"/>
                <label for="female">Female</label><br/>
                <input type="radio" id="other" name="gender" value="other"/>
                <label for="other">Other</label><br/>
                <input type="submit" value="Submit"/><br/>
            </form>
        </div>
    </>
}

export default Text;