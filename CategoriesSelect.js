export default class CategoriesSelect extends React.Component {
  renderButtons() {
    let categories = this.props.categories.map((category, id) => {
      return (
        <button className="btn btn-primary"> {category} </button>
      )
    })
    return (
      {categories}
    )
  }
  render() {
    const {categories} = this.props;
    console.log("woo ", this.props)
    return (
      <div> hello world </div>
    )
  }
}
