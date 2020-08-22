import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../shared/services/shared-service/shared.service';
import {SearchItem} from '../../models/search-item.model';

@Component({
             selector: 'app-search-item-detailed-info',
             templateUrl: './search-item-detailed-info.component.html',
             styleUrls: ['./search-item-detailed-info.component.scss']
           })
export class SearchItemDetailedInfoComponent implements OnInit {
  public video: SearchItem;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _sharedService: SharedService) {
  }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      const videoId: string = params.id;
      this.video = this._sharedService.getVideoData(videoId);
    });
  }

  public goBack(): void {
    this.router.navigate(['youtube']);
  }

}
