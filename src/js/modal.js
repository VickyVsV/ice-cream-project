(() => {

    const modal_refs = {
            openModalBtn1: document.querySelectorAll(".mob-menu__btn"),
            openModalBtn1_1: document.querySelectorAll(".buy-now__btn"),
            openModalBtn2: document.querySelectorAll(".products__btn"),
            openModalBtn3: document.querySelectorAll(".contacts__button--franchise"),
            openModalBtn4: document.querySelectorAll(".about__btn"),
            openModalBtn5: document.querySelectorAll(".contacts__button--location"),
            closeModalBtn: document.querySelectorAll(".modal-window__close-btn"),
            modal: document.querySelector("#modal-backdrop"),
            //inputPhone: document.querySelector("#phone"),
        };

        for(let i=0;i<modal_refs.openModalBtn1.length;i++)
        {
            modal_refs.openModalBtn1[i].value="buy_now_form";
            modal_refs.openModalBtn1[i].addEventListener("click",toggleModal);
        }
        for(let i=0;i<modal_refs.openModalBtn1_1.length;i++)
        {
            modal_refs.openModalBtn1_1[i].value="buy_now_form";
            modal_refs.openModalBtn1_1[i].addEventListener("click",toggleModal);
        }
        for(let i=0;i<modal_refs.openModalBtn2.length;i++)
        {   
            modal_refs.openModalBtn2[i].value="modal_ingredients";
            modal_refs.openModalBtn2[i].addEventListener("click", toggleModal);
        }
        for(let i=0;i<modal_refs.openModalBtn3.length;i++)
        {   

            modal_refs.openModalBtn3[i].value="franchise_modal";
            modal_refs.openModalBtn3[i].addEventListener("click", toggleModal);
        }
        for(let i=0;i<modal_refs.openModalBtn4.length;i++)
        {   
            modal_refs.openModalBtn4[i].value="read_more_modal";
            modal_refs.openModalBtn4[i].addEventListener("click", toggleModal);
        }
        for(let i=0;i<modal_refs.openModalBtn5.length;i++)
        {   
            modal_refs.openModalBtn5[i].value="our_location_modal";
            modal_refs.openModalBtn5[i].addEventListener("click", toggleModal);
        }
            
    

    
            for(let i=0;i<modal_refs.closeModalBtn.length;i++)
            {   
                modal_refs.closeModalBtn[i].addEventListener("click", toggleModal);
            }
        
    
        function toggleModal()
        {
            modal_refs.modal.classList.toggle("modal-is-hidden");
            document.querySelector("#"+this.value).classList.toggle("modal-is-hidden");
        }
  //=================================MAP========================================  
        let map;
        function initialize() {
            //--center--
            let lat = 44.68385702802469;
            let lng = -101.01402164348723;
            let latlng = new google.maps.LatLng(lat,lng);
            //--location 1
            let lat0 = 41.70357780196271;
            let lng0= -87.77974050194243;
            let loc0=new google.maps.LatLng(lat0,lng0);
            //--location 2
            let lat1 = 33.887836864780496;
            let lng1= -118.39764973093762;
            let loc1=new google.maps.LatLng(lat1,lng1);
            //--location 2
            let lat2 = 40.67289720983488;
            let lng2= -73.9547340019655;
            
            let mapOpts = {
                zoom: 1,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.HYBRID
            };
            map = new google.maps.Map(document.getElementById('map'),mapOpts);
    
            let loc = new google.maps.LatLng(lat,lng);
    
            let marker0=new google.maps.Marker({
                position:   loc0,
                map:        map,
                title:      "Cafe Chicago"
    
            });
            map.setCenter(loc0,20);
    
            let marker1=new google.maps.Marker({
                position:   loc1,
                map:        map,
                title:      "Foodtruck Los Angeles"
    
            });
            map.setCenter(loc1,20);
    
            let loc2=new google.maps.LatLng(lat2,lng2);
            let marker2=new google.maps.Marker({
                position:   loc2,
                map:        map,
                title:      "Cafe New York"
    
            });
            map.setCenter(loc2,20);
        }
        initialize();
    })();
    