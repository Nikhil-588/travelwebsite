function Event() {
  return (
    <div onClick={() => console.log("1 clicked")}>
      <div onClick={(event) => {event.stopPropagation(); console.log("2 clicked")}}>
        <button onClick={()=>{console.log("3111 clicked")}}>button</button>
      </div>
    </div>
  );
}

export default Event;