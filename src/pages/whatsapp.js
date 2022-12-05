import React from 'react';

const contact = () => {
    window.location = <a href="https://api.whatsapp.com/send?phone=221776806767" />
}

const Whatsapp = () => {  
    return (    
    <>
        <div class="whatsapp-chat">
  <input type="checkbox" id="whatsapp-chat-toggler" class="whatsapp-chat-toggler"/>
  
  <label for="whatsapp-chat-toggler"
         class="whatsapp-chat-backdrop"></label>
  
  <div class="whatsapp-chat-window">
    <div class="whatsapp-chat-header">
			<img src="./img/signe.png" alt="logo vbs" 
					 class="whatsapp-chat-contact-img"/>
      <div class="whatsapp-chat-contact-info">
        <strong>VOS BESOINS SERVICES</strong>
        <small>
          Prestation de service
          •
          <span class="text-wa-light-green">Online</span>
        </small>
      </div>
      <label for="whatsapp-chat-toggler"
             title="Fechar o chat do WhatsApp"
             class="whatsapp-chat-close">
        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M42.5467 12.4536C43.2627 13.1696 43.2627 14.3304 42.5467 15.0464L15.0467 42.5464C14.3307 43.2623 13.1699 43.2623 12.454 42.5464C11.738 41.8304 11.738 40.6696 12.454 39.9536L39.954 12.4536C40.6699 11.7377 41.8307 11.7377 42.5467 12.4536Z" fill="currentColor"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.454 12.4536C13.1699 11.7377 14.3307 11.7377 15.0467 12.4536L42.5467 39.9536C43.2627 40.6696 43.2627 41.8304 42.5467 42.5464C41.8307 43.2623 40.6699 43.2623 39.954 42.5464L12.454 15.0464C11.738 14.3304 11.738 13.1696 12.454 12.4536Z" fill="currentColor"/>
        </svg>
      </label>
    </div>
    <div class="whatsapp-chat-body">
      <p class="whatsapp-chat-bubble">
				Hello, bienvenue. <br/>
				Parlez-nous directement sur whatsapp.
      </p>
			<form>
				{/* <label for="whatsapp-name" class="whatsapp-chat-green-bubble">
					<input type="text"
								 id="whatsapp-name"
								 placeholder="Prénom et nom"
								 required
								 class="whatsapp-chat-input"/>
					<span class="error">
						<span class="error-text">
							This field is required
						</span>
						<svg class="error-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
					</span>
				</label> */}
				{/* <label for="whatsapp-email" class="whatsapp-chat-green-bubble">
					<input type="text"
								 id="whatsapp-email"
								 placeholder="Service"
								 required
								 class="whatsapp-chat-input"/>
					<span class="error">
							<span class="error-text">
								This field is required
							</span>
							<svg class="error-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
						</span>
				</label> */}
                <label for="whatsapp-name" class="whatsapp-chat-green-bubble">
					<input type="text"
								 id="whatsapp-name"
								 placeholder="Service"
								 required
								 class="whatsapp-chat-input"/>
					<span class="error">
						<span class="error-text">
							This field is required
						</span>
						<svg class="error-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
					</span>
				</label>
				<label for="whatsapp-phone" class="whatsapp-chat-green-bubble">
					<input type="tel"
								 id="whatsapp-phone"
								 placeholder="Numéro de téléphone"
								 required
								 class="whatsapp-chat-input"/>
					<span class="error">
						<span class="error-text">
							This field is required
						</span>
						<svg class="error-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
					</span>
				</label>

                <label for="whatsapp-name" class="whatsapp-chat-green-bubble">
					<input type="text"
								 id="whatsapp-ad"
								 placeholder="Adresse"
								 required
								 class="whatsapp-chat-input"/>
					<span class="error">
						<span class="error-text">
							This field is required
						</span>
						<svg class="error-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
					</span>
				</label>
				{/* <div class="whatsapp-chat-checkbox">
					<input type="checkbox"
								 required
								 id="whatsapp-newsletter"/>
					<label class="whatsapp-chat-green-bubble" for="whatsapp-newsletter">
						<span class="whatsapp-chat-input">
							I agree to subscribe to the newsletter
						</span>
						<span class="error">
									<span class="error-text">
										This field is required
									</span>
									<svg class="error-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
								</span>
					</label>
				</div> */}

				<button onClick={contact} class="whatsapp-chat-btn">
						Envoyer
				</button>
			</form>
    </div>
  </div>
  
  <label for="whatsapp-chat-toggler"
         class="whatsapp-chat-button">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.4054 3.4875C18.1607 1.2375 15.1714 0 11.9946 0C5.4375 0 0.101786 5.33571 0.101786 11.8929C0.101786 13.9875 0.648214 16.0339 1.6875 17.8393L0 24L6.30536 22.3446C8.04107 23.2929 9.99643 23.7911 11.9893 23.7911H11.9946C18.5464 23.7911 24 18.4554 24 11.8982C24 8.72143 22.65 5.7375 20.4054 3.4875ZM11.9946 21.7875C10.2161 21.7875 8.475 21.3107 6.95893 20.4107L6.6 20.1964L2.86071 21.1768L3.85714 17.5286L3.62143 17.1536C2.63036 15.5786 2.11071 13.7625 2.11071 11.8929C2.11071 6.44464 6.54643 2.00893 12 2.00893C14.6411 2.00893 17.1214 3.0375 18.9857 4.90714C20.85 6.77679 21.9964 9.25714 21.9911 11.8982C21.9911 17.3518 17.4429 21.7875 11.9946 21.7875ZM17.4161 14.3839C17.1214 14.2339 15.6589 13.5161 15.3857 13.4196C15.1125 13.3179 14.9143 13.2696 14.7161 13.5696C14.5179 13.8696 13.95 14.5339 13.7732 14.7375C13.6018 14.9357 13.425 14.9625 13.1304 14.8125C11.3839 13.9393 10.2375 13.2536 9.08571 11.2768C8.78036 10.7518 9.39107 10.7893 9.95893 9.65357C10.0554 9.45536 10.0071 9.28393 9.93214 9.13393C9.85714 8.98393 9.2625 7.52143 9.01607 6.92679C8.775 6.34821 8.52857 6.42857 8.34643 6.41786C8.175 6.40714 7.97679 6.40714 7.77857 6.40714C7.58036 6.40714 7.25893 6.48214 6.98571 6.77679C6.7125 7.07679 5.94643 7.79464 5.94643 9.25714C5.94643 10.7196 7.0125 12.1339 7.15714 12.3321C7.30714 12.5304 9.25179 15.5304 12.2357 16.8214C14.1214 17.6357 14.8607 17.7054 15.8036 17.5661C16.3768 17.4804 17.5607 16.8482 17.8071 16.1518C18.0536 15.4554 18.0536 14.8607 17.9786 14.7375C17.9089 14.6036 17.7107 14.5286 17.4161 14.3839Z" fill="currentColor"/>
    </svg>
  </label>
</div>


     {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
<a href="https://api.whatsapp.com/send?phone=221776806767" class="float" target="_blank">
<i class="fa fa-whatsapp my-float"></i>
</a> */}

    </>
    
    );
};

export default Whatsapp;