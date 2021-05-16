import { useRef, useState } from "react";
import { createMovie } from "../actions";

const MovieCreateForm = ({ categories }) => {
  const closeBtn = useRef();

  const [form, setForm] = useState({
    name: "",
    description: "",
    rating: "",
    genre: [],
    image: "",
    cover: "",
  });

  const handleChange = (e) => {
    const { name, value, options, type } = e.target;
    let optionsValue = [];
    if (type === "select-multiple") {
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          optionsValue.push(options[i].value);
        }
      }
    }

    setForm({
      ...form,
      [name]: type === "select-multiple" ? optionsValue : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(form)
      .then((results) => {
        console.log("res", results);
        closeBtn.current.click();
      })
      .then((err) => console.log("err", err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          name="name"
          value={form.name}
          type="text"
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          onChange={handleChange}
          name="description"
          value={form.description}
          type="text"
          className="form-control"
          id="description"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Rating</label>
        <input
          onChange={handleChange}
          name="rating"
          value={form.rating}
          type="number"
          max="5"
          min="0"
          className="form-control"
          id="rating"
        />
        <small id="emailHelp" className="form-text text-muted">
          Max: 5, Min: 0{" "}
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          onChange={handleChange}
          name="image"
          value={form.image}
          type="text"
          className="form-control"
          id="image"
          placeholder="http://....."
        />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Cover</label>
        <input
          onChange={handleChange}
          type="text"
          name="cover"
          value={form.cover}
          className="form-control"
          id="cover"
          placeholder="http://......"
        />
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select onChange={handleChange} name="genre" value={form.genre} multiple className="form-control" id="genre">
          {categories.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="modal-footer">
        <button ref={closeBtn} type="button" className="btn btn-secondary" data-dismiss="modal">
          Close
        </button>
        <button type="submit" className="btn btn-primary">
          Save changes
        </button>
      </div>
    </form>
  );
};

export default MovieCreateForm;
