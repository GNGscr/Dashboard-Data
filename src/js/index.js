import styles from '../css/globals.css'
import { inherits } from 'util';


let templates = {};
// templates.protocolTemplate = `<div class="protocol"> 
//                     <div class='p_check' />
//                         <input type="checkbox" />                        
//                     </div>
//                     <div class="p_name">{{protocol_name}}</div>
//                 `;
// templates.timeTemplate = `<div class="protocol"> 
//                     <div class='p_check' />
//                         <input type="radio" />                        
//                     </div>
//                     <div class="p_name">{{time_name}}</div>
//                 `;
                
templates.summaryDevice = `<div class="deviceItem"><p>{{device_name}}</p></div>`;
templates.summaryProtocols = `<div class="protocolItem"><p>{{protocol_s_name}}</p></div>`;
templates.summaryTimes = `<div class="periodItem"><p>{{time_s_name}}</p></div>`;


(function init() {
    document.querySelector("#start").addEventListener("click", (e) => {
        createSummary();
    });

    document.querySelector("#clear").addEventListener("click", (e) => {
        clear();
    });
    
    loadData();
})();


function loadData() {
    fetch("./data/ex_data.json")
        .then(res => res.json())
        .then((data) => {
            loadBDevicesByGroup(data.device_groups);
            // appendCheckboxes(data.device_groups.devices);
            CheckboxesAppendCheckToParent(data.device_groups);
            // appendCheckboxes(data.device_groups[0].devices, data.device_groups[1].devices, data.device_groups[2].devices);
            loadProtocols(data.protocols);
            loadTimes(data.times);
            // fetchIds(data.device_groups, data.protocols, data.times);
            caret3Toggle();
            appendCheckboxes();
        }
    );
}

function loadBDevicesByGroup(groups) {
    let groupHtml = document.querySelector('.group');

    groups.forEach(group => {
        let ghead = document.createElement('div');
        ghead.classList.add('group-head');

        let car = document.createElement('div');
        car.classList.add('carret');
        car.innerHTML = '<i class="fas fa-caret-down"></i>';

        let gcheck = document.createElement('input');
        gcheck.type = 'checkbox'
        gcheck.name = group.name;
        gcheck.value = group.name;

        let gname = document.createElement('h4');
        gname.innerText = group.name;

        ghead.appendChild(car);
        ghead.appendChild(gcheck);
        ghead.appendChild(gname);

        let devices = document.createElement('div');
        devices.classList.add('devices');

        group.devices.forEach(device => {
            let div = document.createElement('div');
            div.classList.add('device')

            let p = document.createElement('p')

            let checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.classList.add('checkbox')
            checkbox.dataset.name = device.name;
            checkbox.dataset.id = device.id;
            checkbox.checked = (device.active === 1) ? true : false;

            p.innerText = device.name
            div.appendChild(checkbox)
            div.appendChild(p);

            devices.appendChild(div)
        });

        groupHtml.appendChild(ghead);
        groupHtml.appendChild(devices);

    });
}

function loadProtocols(protocols) {
    let protocolsHtml = document.querySelector('#protocols');

    protocols.forEach(protocol => {
        let div = document.createElement('div');
        div.classList.add('protocol')

        let p = document.createElement('p')

        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.classList.add('checkbox')
        checkbox.dataset.name = protocol.name;
        checkbox.dataset.id = protocol.id;
        checkbox.checked = (protocol.active === 1) ? true : false;

        p.innerText = protocol.name
        div.appendChild(checkbox)
        div.appendChild(p);

        protocolsHtml.appendChild(div)
    //     protocolsHtml.innerHTML += `
    //     <div class="protocol"> 
    //         <div class='p_check' />
    //             <input type="checkbox" id=${p.id}/>                        
    //         </div>
    //     <div class="p_name">${p.name}</div>
    // `
        // protocolsHtml.innerHTML += templates.protocolTemplate.replace("{{protocol_name}}", p.name);
        // console.log('p: ', p) 
    });
}

function loadTimes(times) {
    let timesHtml = document.querySelector('#times');

    times.forEach(time => {
        let div = document.createElement('div');
        div.classList.add('time')

        let p = document.createElement('p')
        p.classList.add('p_name')

        let checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'radio')
        checkbox.classList.add('p_check')
        checkbox.dataset.name = time.name;
        checkbox.dataset.id = time.id;
        checkbox.checked = (time.active === 1) ? true : false;

        p.innerText = time.name
        div.appendChild(checkbox)
        div.appendChild(p);

        timesHtml.appendChild(div)
    //     timesHtml.innerHTML += `
    //     <div class="protocol"> 
    //         <div class='p_check' />
    //             <input type="radio" id=${t.id}/>                        
    //         </div>
    //     <div class="p_name">${t.name}</div>
    // `;
        // timesHtml.innerHTML += templates.timeTemplate.replace("{{time_name}}", t.name);
    });
}


function createSummary() {
    let Arr1 = [];
    let Arr2 = [];
    let Arr3 = [];
    let devicesStr = 'ex.html?devices=';
    let summary = document.querySelector("#devicesSummary");
    summary.innerHTML = '';
    let elements = document.querySelectorAll("#devices input[type='checkbox']:checked");
    // console.log(elements)
    
    elements.forEach(elm => {
        if (elm.checked) {
            console.log(elm)
            summary.innerHTML += templates.summaryDevice.replace("{{device_name}}", elm.dataset.name);
            if(elm.dataset.name !== undefined){
                Arr1.push(elm.dataset.id);
            }
        }
    });
    
    let protocolsStr = '&protocols=';
    let protocolsSum = document.querySelector("#protocolsSummary");
    protocolsSum.innerHTML = '';
    let elmProtocols = document.querySelectorAll("#protocols input[type='checkbox']:checked");
    // console.log('elmProtocols',elmProtocols)
    elmProtocols.forEach(p => {
        if (p.checked) {
            protocolsSum.innerHTML += templates.summaryProtocols.replace("{{protocol_s_name}}", p.dataset.name);
            Arr2.push(p.dataset.id)
        }
    });

    let timesStr = '&times=';
    let timesSum = document.querySelector("#periodSummary");
    timesSum.innerHTML = '';
    let elmTimes = document.querySelectorAll("#times input[type='radio']:checked");
    // console.log(elmTimes)
    elmTimes.forEach(t => {
        if (t.checked) {
            timesSum.innerHTML += templates.summaryTimes.replace("{{time_s_name}}", t.dataset.name);
            // console.log('t.dataset.id',t.id)
            Arr3.push(t.dataset.id)
        }
    });
    let finalStr = '';
    finalStr = `${devicesStr}${Arr1}${protocolsStr}${Arr2}${timesStr}${Arr3}`;
    createGetReq(finalStr);
}
// function fetchIds(d, p, t) {
//     console.log(d)
//     console.log(p)
//     console.log(t)
//     d.forEach(g => {
//         // console.log(d[0].devices[0].id)
//     });
// }

function createGetReq(str){
    console.log(str)
}


    // function check(e) {
    //     let counter = 1;
    //     let z = 2;
    //     console.log("z: ", z)
    //     console.log("counter: ", counter)
    //     let da = `#devices > div:nth-child(${counter}) > input[type="checkbox"]`;
    //     let za = `#devices > div:nth-child(${z}) input[type='checkbox']:checked`;
    //     let fa = `#devices > div:nth-child(${z}) > div`;
    //     let gfull = document.querySelectorAll(fa);
    //     let gParnetCheckbox = document.querySelector(da);
    //     let g1 =  document.querySelectorAll(za);
    //     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}
    //     counter += 2;
    //     z += 2;
    // }
  
    // for(let x = 1; x <= devices.length; x++) {
    //     let g = 2;
    //     let fa = `#devices > div:nth-child(${g}) > div`;
    //     let gfull = document.querySelectorAll(fa);
    //     gfull.forEach((g, i) => {
    //         i++; // === 1
    //         let y = 2;

    //        let mishtane = `#devices > div:nth-child(${y}) > div:nth-child(${i})`;
    //        document.querySelector(mishtane).addEventListener('change', (e, y, i) => {
            
    //         let da = `#devices > div:nth-child(${i}) > input[type="checkbox"]`;
    //         let za = `#devices > div:nth-child(${y}) input[type='checkbox']:checked`;
    //         let fa = `#devices > div:nth-child(${y}) > div`;

    //         let gParnetCheckbox = document.querySelector(da);
    //         let g1 =  document.querySelectorAll(za);

    //         if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}
    //        });

    //        y += 2;
    //     });
    //     g += 2;
    // }




// function appendCheckboxes(devices1, devices2, devices3){
    function appendCheckboxes(){
        let gfull1 = document.querySelectorAll("#devices > div:nth-child(2) > div");
        let gParnetCheckbox1 = document.querySelector('#devices > div:nth-child(1) > input[type="checkbox"]');

    gfull1.forEach((g, i) => {
        i++; // === 1
        let fst_grp_devices = `#devices > div:nth-child(2) > div:nth-child(${i})`;
        document.querySelector(fst_grp_devices).addEventListener('change', check);
    });
    function check(e) {
        let g1 =  document.querySelectorAll("#devices > div:nth-child(2) input[type='checkbox']:checked");
            if(g1.length === gfull1.length) {gParnetCheckbox1.checked = true} else {gParnetCheckbox1.checked = false}
    }



        let gfull2 = document.querySelectorAll("#devices > div:nth-child(4) > div");
        let gParnetCheckbox2 = document.querySelector('#devices > div:nth-child(3) > input[type="checkbox"]');
    
    gfull2.forEach((g, i) => {
        i++; // === 1
        let fst_grp_devices = `#devices > div:nth-child(4) > div:nth-child(${i})`;
        document.querySelector(fst_grp_devices).addEventListener('change', check2);
    });
    function check2(e) {
        let g2 =  document.querySelectorAll("#devices > div:nth-child(4) input[type='checkbox']:checked");
            if(g2.length === gfull2.length) {gParnetCheckbox2.checked = true} else {gParnetCheckbox2.checked = false}
    }



        let gfull3 = document.querySelectorAll("#devices > div:nth-child(6) > div");
        let gParnetCheckbox3 = document.querySelector('#devices > div:nth-child(5) > input[type="checkbox"]');
    
    gfull3.forEach((g, i) => {
        i++; // === 1
        let fst_grp_devices = `#devices > div:nth-child(6) > div:nth-child(${i})`;
        document.querySelector(fst_grp_devices).addEventListener('change', check3);
    });
    function check3(e) {
        let g3 =  document.querySelectorAll("#devices > div:nth-child(6) input[type='checkbox']:checked");
            if(g3.length === gfull3.length) {gParnetCheckbox3.checked = true} else {gParnetCheckbox3.checked = false}
    }


    // ====== group 1 ======= //

    // let checkedItem1 = document.querySelector("#devices > div:nth-child(2) > div:nth-child(1)").addEventListener('change', (e) => {
    //     let g1 =  document.querySelectorAll("#devices > div:nth-child(2) input[type='checkbox']:checked");
    //     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}
    // });
    // let checkedItem2 = document.querySelector("#devices > div:nth-child(2) > div:nth-child(2)").addEventListener('change', (e) => {
    //     let g1 =  document.querySelectorAll("#devices > div:nth-child(2) input[type='checkbox']:checked");
    //     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}
    // });
    // let checkedItem3 = document.querySelector("#devices > div:nth-child(2) > div:nth-child(3)").addEventListener('change', (e) => {
    //     let g1 =  document.querySelectorAll("#devices > div:nth-child(2) input[type='checkbox']:checked");
    //     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}
    // });
    // let checkedItem4 = document.querySelector("#devices > div:nth-child(2) > div:nth-child(4)").addEventListener('change', (e) => {
    //     let g1 =  document.querySelectorAll("#devices > div:nth-child(2) input[type='checkbox']:checked");
    //     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}
    // });
    // let checkedItem5 = document.querySelector("#devices > div:nth-child(2) > div:nth-child(5)").addEventListener('change', (e) => {
    //     let g1 =  document.querySelectorAll("#devices > div:nth-child(2) input[type='checkbox']:checked");
    //     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}
    // });
    // let checkedItem6 = document.querySelector("#devices > div:nth-child(2) > div:nth-child(6)").addEventListener('change', (e) => {
    //     let g1 =  document.querySelectorAll("#devices > div:nth-child(2) input[type='checkbox']:checked");
    //     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}
    // });
    // let checkedItem7 = document.querySelector("#devices > div:nth-child(2) > div:nth-child(7)").addEventListener('change', (e) => {
    //     let g1 =  document.querySelectorAll("#devices > div:nth-child(2) input[type='checkbox']:checked");
    //     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}
    // });

    // // ====== group 2 ======= //


    // let gfull2 = document.querySelectorAll("#devices > div:nth-child(4) > div");
    // let gParnetCheckbox2 = document.querySelector('#devices > div:nth-child(3) > input[type="checkbox"]');

    // let checkedItem2_1 = document.querySelector("#devices > div:nth-child(4) > div:nth-child(1)").addEventListener('change', (e) => {
    //     let g2 =  document.querySelectorAll("#devices > div:nth-child(4) input[type='checkbox']:checked");
    //     if(g2.length === gfull2.length) {gParnetCheckbox2.checked = true} else {gParnetCheckbox2.checked = false}
    // });
    // let checkedItem2_2 = document.querySelector("#devices > div:nth-child(4) > div:nth-child(2)").addEventListener('change', (e) => {
    //     let g2 =  document.querySelectorAll("#devices > div:nth-child(4) input[type='checkbox']:checked");
    //     if(g2.length === gfull2.length) {gParnetCheckbox2.checked = true} else {gParnetCheckbox2.checked = false}
    // });
    // let checkedItem2_3 = document.querySelector("#devices > div:nth-child(4) > div:nth-child(3)").addEventListener('change', (e) => {
    //     let g2 =  document.querySelectorAll("#devices > div:nth-child(4) input[type='checkbox']:checked");
    //     if(g2.length === gfull2.length) {gParnetCheckbox2.checked = true} else {gParnetCheckbox2.checked = false}
    // });
    // let checkedItem2_4 = document.querySelector("#devices > div:nth-child(4) > div:nth-child(4)").addEventListener('change', (e) => {
    //     let g2 =  document.querySelectorAll("#devices > div:nth-child(4) input[type='checkbox']:checked");
    //     if(g2.length === gfull2.length) {gParnetCheckbox2.checked = true} else {gParnetCheckbox2.checked = false}
    // });
    // let checkedItem2_5 = document.querySelector("#devices > div:nth-child(4) > div:nth-child(5)").addEventListener('change', (e) => {
    //     let g2 =  document.querySelectorAll("#devices > div:nth-child(4) input[type='checkbox']:checked");
    //     if(g2.length === gfull2.length) {gParnetCheckbox2.checked = true} else {gParnetCheckbox2.checked = false}
    // });
    // let checkedItem2_6 = document.querySelector("#devices > div:nth-child(4) > div:nth-child(6)").addEventListener('change', (e) => {
    //     let g2 =  document.querySelectorAll("#devices > div:nth-child(4) input[type='checkbox']:checked");
    //     if(g2.length === gfull2.length) {gParnetCheckbox2.checked = true} else {gParnetCheckbox2.checked = false}
    // });
    // let checkedItem2_7 = document.querySelector("#devices > div:nth-child(4) > div:nth-child(7)").addEventListener('change', (e) => {
    //     let g2 =  document.querySelectorAll("#devices > div:nth-child(4) input[type='checkbox']:checked");
    //     if(g2.length === gfull2.length) {gParnetCheckbox2.checked = true} else {gParnetCheckbox2.checked = false}
    // });

    // // ====== group 3 ======= //

    // let gfull3 = document.querySelectorAll("#devices > div:nth-child(6) > div");
    // let gParnetCheckbox3 = document.querySelector('#devices > div:nth-child(5) > input[type="checkbox"]');

    // let checkedItem3_1 = document.querySelector("#devices > div:nth-child(6) > div:nth-child(1)").addEventListener('change', (e) => {
    //     let g3 =  document.querySelectorAll("#devices > div:nth-child(6) input[type='checkbox']:checked");
    //     if(g3.length === gfull3.length) {gParnetCheckbox3.checked = true} else {gParnetCheckbox3.checked = false}
    // });
    // let checkedItem3_2 = document.querySelector("#devices > div:nth-child(6) > div:nth-child(2)").addEventListener('change', (e) => {
    //     let g3 =  document.querySelectorAll("#devices > div:nth-child(6) input[type='checkbox']:checked");
    //     if(g3.length === gfull3.length) {gParnetCheckbox3.checked = true} else {gParnetCheckbox3.checked = false}
    // });
    // let checkedItem3_3 = document.querySelector("#devices > div:nth-child(6) > div:nth-child(3)").addEventListener('change', (e) => {
    //     let g3 =  document.querySelectorAll("#devices > div:nth-child(6) input[type='checkbox']:checked");
    //     if(g3.length === gfull3.length) {gParnetCheckbox3.checked = true} else {gParnetCheckbox3.checked = false}
    // });
    // let checkedItem3_4 = document.querySelector("#devices > div:nth-child(6) > div:nth-child(4)").addEventListener('change', (e) => {
    //     let g3 =  document.querySelectorAll("#devices > div:nth-child(6) input[type='checkbox']:checked");
    //     if(g3.length === gfull3.length) {gParnetCheckbox3.checked = true} else {gParnetCheckbox3.checked = false}
    // });
    // let checkedItem3_5 = document.querySelector("#devices > div:nth-child(6) > div:nth-child(5)").addEventListener('change', (e) => {
    //     let g3 =  document.querySelectorAll("#devices > div:nth-child(6) input[type='checkbox']:checked");
    //     if(g3.length === gfull3.length) {gParnetCheckbox3.checked = true} else {gParnetCheckbox3.checked = false}
    // });
    // let checkedItem3_6 = document.querySelector("#devices > div:nth-child(6) > div:nth-child(6)").addEventListener('change', (e) => {
    //     let g3 =  document.querySelectorAll("#devices > div:nth-child(6) input[type='checkbox']:checked");
    //     if(g3.length === gfull3.length) {gParnetCheckbox3.checked = true} else {gParnetCheckbox3.checked = false}
    // });
    // let checkedItem3_7 = document.querySelector("#devices > div:nth-child(6) > div:nth-child(7)").addEventListener('change', (e) => {
    //     let g3 =  document.querySelectorAll("#devices > div:nth-child(6) input[type='checkbox']:checked");
    //     if(g3.length === gfull3.length) {gParnetCheckbox3.checked = true} else {gParnetCheckbox3.checked = false}
    // });


    let ghead1 = document.querySelector('#devices > div:nth-child(1)');
    let dev1 = document.querySelector('#devices > div:nth-child(2)');
    let device11 = document.querySelector('#devices > div:nth-child(2) > div:nth-child(1)');
    let device17 = document.querySelector('#devices > div:nth-child(2) > div:nth-child(7)');
    let ghead2 = document.querySelector('#devices > div:nth-child(3)');
    let dev2 = document.querySelector('#devices > div:nth-child(4)');
    let ghead3 = document.querySelector('#devices > div:nth-child(5)');
    let dev3 = document.querySelector('#devices > div:nth-child(6)');


    // appendCheckToChildren();
        // console.log(devices1)
        // console.log(devices2)
        // console.log(devices3)
}

function CheckboxesAppendCheckToParent(groups){
    let gParnetCheckbox1 = document.querySelector('#devices > div:nth-child(1) > input[type="checkbox"]');
    let g1 =  document.querySelectorAll("#devices > div:nth-child(2) input[type='checkbox']");
    gParnetCheckbox1.addEventListener('change', () => {
        if(gParnetCheckbox1.checked === true){
            g1.forEach(d => { d.checked = true}) } else { g1.forEach(d => {d.checked = false}) }
    })
    let gParnetCheckbox2 = document.querySelector('#devices > div:nth-child(3) > input[type="checkbox"]');
    let g2 =  document.querySelectorAll("#devices > div:nth-child(4) input[type='checkbox']");
    gParnetCheckbox2.addEventListener('change', () => {
        if(gParnetCheckbox2.checked === true){
            g2.forEach(d => { d.checked = true}) } else { g2.forEach(d => {d.checked = false}) }
    })
    let gParnetCheckbox3 = document.querySelector('#devices > div:nth-child(5) > input[type="checkbox"]');
    let g3 =  document.querySelectorAll("#devices > div:nth-child(6) input[type='checkbox']");
    gParnetCheckbox3.addEventListener('change', () => {
        if(gParnetCheckbox3.checked === true){
            g3.forEach(d => { d.checked = true}) } else { g3.forEach(d => {d.checked = false}) }
    })

    // let j = 1;
    // let i = 1;
    // let y = 2;

    // groups.forEach(group => {
    //     console.log('group: ' ,group, 'i:', i)
    //     console.log(document.querySelector(`#devices > div:nth-child(${i}) > input[type="checkbox"]`));  // parent
    //     // let g1 =  document.querySelectorAll("#devices > div:nth-child(2) input[type='checkbox']");
    //     group.devices.forEach((device, j) => {
    //         j++
    //         console.log('device: ', device, 'y: ', y, 'j : ', j)
    //         console.log(document.querySelector(`#devices > div:nth-child(${y}) > div:nth-child(${j}) input[type='checkbox']`)) // device
    //     })
    //     // i.addEventListener('change', () => {
    //     //     if(i.checked === true){
    //     //         group.devices.forEach(device => { j.checked = true }) } else { group.devices.forEach(device => { j.checked = false }) };
    //     // })  
    //     y+=2
    //     i+=2
    // })
}

function caret3Toggle() {
    let group = document.querySelector('#devices > div:nth-child(6)');
    group.style.display = 'none';
    let caret3 = document.querySelector('#devices > div:nth-child(5) > div > i');
    // console.log(caret3) 
    let carretDown = document.querySelector('#devices > div:nth-child(5) > div > i')
    carretDown.style.transform = 'rotate(-90deg)';
    const groupBar = document.querySelector('#devices > div:nth-child(5)')
        caret3.addEventListener('click', () => {
            // console.log('clicked')
            // const group = document.querySelector('.devices-3');
            // const carretDown = document.querySelector('.caret-down-3');
            if (group.style.display === 'none') {
                group.style.display = 'flex';
                group.style.transition = '400ms';
                groupBar.style.borderRadius = '0';
                carretDown.style.transform = 'rotate(0)';
                carretDown.style.transition = '300ms'
            } else {
                group.style.display = 'none';
                groupBar.style.borderRadius = '0 0 5px 5px';
                carretDown.style.transform = 'rotate(-90deg)'
                carretDown.style.transition = '300ms'
            }
        })
}

function clear(){
    let checkedInputs = document.querySelectorAll('input[type="checkbox"]:checked');
    let checkedRadioInputs = document.querySelectorAll('input[type="radio"]:checked');
    Array.from(checkedInputs).map(item => {
        item.checked = false;
    })
    Array.from(checkedRadioInputs).map(item => {
        item.checked = false;
    })
}


//     const carret3 = document.querySelector('.carret3');
// let carretg3 = document.querySelector('#devices > div:nth-child(5)')
// console.log(carretg3)


//     const clrBtn = document.querySelector('.clrBtn');
//     clrBtn.addEventListener('click', () => {
//         console.log('clrBtn works')
//     });

//     const submit = document.querySelector('.submit');
//     submit.addEventListener('click', () => {
//         console.log('submit works')
//     });
