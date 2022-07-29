import { Component } from "react";

class Sort extends Component{
    state = {
        isOpen: false
    };

    renderSort = () => {
        let {sortType, sortOrder} = this.props;
        if(sortType !== '' && sortOrder !== '') {
            return (
                <span className="ml-2 mt-1 label label-success label-medium text-uppercase">
                    {sortType} - {sortOrder}
                </span>
            )
        }
    }
    handleClick = (sortType,sortOrder) => {
        this.props.handleSort(sortType, sortOrder);
    }

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

    render()
    {
        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    
        return(
            <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" onClick={this.toggleOpen} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sort by <span className="caret" />
                </button>
                <ul className={menuClass} id="dropdownMenu1">
                    <li onClick={() => this.handleClick('name','asc')}>
                        <a role="button" className="text-uppercase">Name ASC</a>
                    </li>
                    <li onClick={() => this.handleClick('name','desc')}>
                        <a role="button" className="text-uppercase">Name DESC</a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li onClick={() => this.handleClick('level','asc')}>
                        <a role="button" className="text-uppercase">Level ASC</a>
                    </li>
                    <li onClick={() => this.handleClick('level','desc')}>
                        <a role="button" className="text-uppercase">Level DESC</a>
                    </li>
                </ul>
                    {this.renderSort()}
            </div>
            
        )
    }
}
export default Sort;