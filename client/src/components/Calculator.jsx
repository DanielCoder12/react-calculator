import { useState } from "react"


export function Calculator(){

        const [display, setDisplay] = useState('')
        function changeNum(n){
            num = num += n
            console.log(num)
        }
    let num = 0

return (<>
    <div>
        <div className="calculator">
<form action="">
    <div>
        <input type="text" />
    </div>
    <div>
        <input type="button" value={'C'} />
        <input type="button" value={'C'} />
        <input type="button" value={'C'} />
        <input type="button" value={'C'} />
    </div>
    <div>
        <input type="button" value={'C'} />
        <input type="button" value={'C'} />
        <input type="button" value={'C'} />
        <input type="button" value={'C'} />
    </div>
    <div>
        <input type="button" value={'C'} />
        <input type="button" value={'C'} />
        <input type="button" value={'C'} />
        <input type="button" value={'C'} />
    </div>
    <div>
        <input type="button" value={'C'} />
        <input type="button" value={'C'} />
        <input type="button" value={'C'} />
        <input type="button" value={'C'} />
    </div>
</form>
        </div>
    </div>
</>
)
}