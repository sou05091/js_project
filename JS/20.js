document.addEventListener('DOMContentLoaded', () => {
    const boxs = document.querySelectorAll('.a1');
    const bt1 = document.querySelector('#bt1');
    //초기배열 : 1이 폭탄 위치
    let arr = [0,0,0,0,0,0,0,0,1];
    //클릭확인
    let flag = true;
    //하트갯수
    let cnt = 0;
    //눌러진 순서
    let selarr = [];

    //폭탄섞기버튼
    bt1.addEventListener('click' , ()=> {
        if(flag){
            arr.sort(() => Math.random() - 0.5);
            console.log(arr);
            flag = false;
            cnt = 0;
            selarr = [];
            document.querySelector('h2').innerHTML = '';
            //폭탄 리셋
            for(let box of boxs)
            box.innerHTML = box.getAttribute('id').replace('box','');
        }

    });

    //div 제어
    for (let box of boxs){
        //박스 번호 넣기
        //box.innerHTML = box.getAttribute('id').slice(-1);
        box.innerHTML = box.getAttribute('id').replace('box','');
        //박스 클릭이벤트 처리
        box.addEventListener('click', ()=> {
            let n = parseInt(box.textContent);
            //기존 하트나 폭탄이 들어가 있는 경우
            if(isNaN(n)) return;
            //폭탄이 눌러지지 않은 경우
            if(!flag){
            //let n =  parseInt(box.getAttribute('id').replace('box',''));
            //선택항목 추가
            selarr.push(n);
            console.log(n,selarr)
            cnt++;
            console.log(cnt);
            //폭탄하트 구분
            if(arr[n-1]==0){
                //하트
                box.innerHTML = '<img src="./image/hart.png">';
                if (cnt == 8){
                    flag = true;
                    document.querySelector('h2').innerHTML = '성공!';
                    let lastArr = [1,2,3,4,5,6,7,8,9].filter((item)=> !selarr.includes(item))
                    console.log(lastArr);
                }
            }  else {
                //폭탄
                box.innerHTML = '<img src="./image/boom.png">';
                document.querySelector('h2').innerHTML = '실패!';
                flag = true;
            }
        }
        });
    }
})