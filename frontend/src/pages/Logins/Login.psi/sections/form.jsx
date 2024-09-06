import { Email } from "../storage/user_email";
import { Password } from "../storage/senha";
import { Cpf } from "../storage/cpf"

export function Form() {
    return (
        <article className="flex flex-col justify-center items-center p-5 w-full max-w-4xl h-3/5 font-satoshi-bold">

            <form action="post" className="w-4/6 max-w-1xl h-auto mt-2 ml-5 justify-center items-center ">

                <Email />
                <Cpf />
                <Password />

            </form>

        </article>
    );
}
