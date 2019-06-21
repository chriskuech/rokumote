import React from "react";
import * as roku from "services/roku";

const Remote =
  () => (
    <div>
      <div>back</div>
      <div>home</div>
      <div>up</div>
      <div>down</div>
      <div>left</div>
      <div>right</div>
      <div>ok</div>
      <div>replay</div>
      <div>options</div>
      <div>rewind</div>
      <div onClick={roku.togglePlay}>play/pause</div>
      <div>fast-forward</div>
    </div>
  );

export default Remote;
