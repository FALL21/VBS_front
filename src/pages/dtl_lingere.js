import React from 'react';

const  openPopup = () => {
    document.getElementById("myPopup").style.display = "block";
}

const  closePopup = () => {
    document.getElementById("myPopup").style.display = "none";
}
const dtl_lingere = () => {
    return (
    <> 
        <div>
            <img src="../imgt/lingere.jpg" onclick={openPopup} id="myImage" />
            <div id="myPopup" class="popup">
                <img src="../imgt/lingere.jpg" id="popupImage" />
                <a class="close" onclick={closePopup}>&times;</a>
            </div>
        </div>
    </>
    );
};

export default dtl_lingere;