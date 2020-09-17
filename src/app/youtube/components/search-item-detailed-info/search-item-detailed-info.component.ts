import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchItem} from '../../models/search-item.model';
import {Observable} from 'rxjs';
import {getVideoById} from '../../../redux/selectors/videos.selector';
import {Store} from '@ngrx/store';
import {State} from '../../../redux/state.model';

@Component({
             selector: 'app-search-item-detailed-info',
             templateUrl: './search-item-detailed-info.component.html',
             styleUrls: ['./search-item-detailed-info.component.scss']
           })
export class SearchItemDetailedInfoComponent implements OnInit {
  public video: Observable<SearchItem>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<State>) {
  }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      const videoId: string = params.id;
      this.video = this.store.select(getVideoById(videoId));
    });
  }

  public goBack(): void {
    this.router.navigate(['youtube']);
  }

}
