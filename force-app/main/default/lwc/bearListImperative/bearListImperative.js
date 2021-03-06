import { LightningElement } from 'lwc';
import ursusResources from '@salesforce/resourceUrl/ursus_park';
import getAllBears from '@salesforce/apex/BearController.getAllBears';

export default class BearListImperative extends LightningElement {
    bears;
    error;
    appResources = {
        bearSilhouette: `${ursusResources}/img/standing-bear-silhouette.png`
    };

    connectedCallback() {
        this.loadBears();
	}

	loadBears() {
		getAllBears()
			.then(result => {
				this.bears = result;
			})
			.catch(error => {
				this.error = error;
			});
	}
}