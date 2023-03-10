import { render, screen } from "@testing-library/react";
import Gallery from "./gallery";

describe("Test Image Gallery Component", () => {
  test("List of thumbnail images", () => {
    const imgList = [
      {
        id: "QJa0R6q",
        title: "Shiprock - New Mexico [OC][1080x644]",
        description: null,
        datetime: 1493611803,
        type: "image/jpeg",
        animated: false,
        width: 1080,
        height: 644,
        size: 86174,
        views: 149622,
        bandwidth: 12893526228,
        vote: null,
        favorite: false,
        nsfw: false,
        section: "EarthPorn",
        account_url: null,
        account_id: null,
        is_ad: false,
        tags: [],
        in_most_viral: false,
        in_gallery: false,
        link: "http://i.imgur.com/QJa0R6q.jpg",
        comment_count: null,
        ups: null,
        downs: null,
        points: null,
        score: 148994,
        is_album: false,
      },
    ];
    //render
    render(<Gallery data={imgList} />);

    //manupulate

    //expectation
  });
});
