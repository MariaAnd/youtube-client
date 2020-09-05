import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchItem} from '../../models/search-item.model';
import {YoutubeService} from '../../services/youtube-service/youtube.service';
import {Observable} from 'rxjs';

@Component({
             selector: 'app-search-item-detailed-info',
             templateUrl: './search-item-detailed-info.component.html',
             styleUrls: ['./search-item-detailed-info.component.scss']
           })
export class SearchItemDetailedInfoComponent implements OnInit {
  public video: Observable<SearchItem>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _youtubeService: YoutubeService) {
  }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      const videoId: string = params.id;
      this.video = this._youtubeService.getVideoData(videoId);
    });
  }

  public goBack(): void {
    this.router.navigate(['youtube']);
  }

}
