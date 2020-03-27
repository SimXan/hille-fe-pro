// Task 1


function generateList(arr) {
    let main = document.querySelector('main');
    let ul = document.createElement('ul');
    main.appendChild(ul);
    arr.forEach(function(item) {
        let li = document.createElement('li');
        if(Array.isArray(item)) {
            let ul = document.createElement('ul');
            li.appendChild(ul);
            
            item.forEach(function(elem) {
                let li = document.createElement('li');
                li.textContent = elem;
                ul.appendChild(li);
            });
            
        }
        else {
            li.textContent = item;
        }
        ul.appendChild(li);
    })
    
}

generateList([2,4,2.5,1412,643,[335,134623,201,46],123,6,35]);

generateList([1,2, [1.1,1.2,1.3] ,3]);









// Task 2







function tableKvadrat(n,columna) {
    let $table = document.querySelector('table');
    let $tr = document.createElement("tr");
    $table.appendChild($tr);
    for(let i = 0; i < n; i++) {
        let $td = document.createElement("td");
        $td.textContent = i + 1;
        if(i % columna === 0) {
            $tr = document.createElement("tr");
            $table.appendChild($tr);
        }
        $tr.appendChild($td);
    }
}

tableKvadrat(100,10);
