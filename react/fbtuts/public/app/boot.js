const tooltip = (
    <ReactBootstrap.Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</ReactBootstrap.Tooltip>
);

const Navigation = React.createClass({
    render: function () {
        return (
            <ReactBootstrap.Navbar inverse collapseOnSelect>
                <ReactBootstrap.Navbar.Header>
                    <ReactBootstrap.Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                    </ReactBootstrap.Navbar.Brand>
                    <ReactBootstrap.Navbar.Toggle />
                </ReactBootstrap.Navbar.Header>
                <ReactBootstrap.Navbar.Collapse>
                    <ReactBootstrap.Nav>
                        <ReactBootstrap.NavItem eventKey={1} href="#">Link</ReactBootstrap.NavItem>
                        <ReactBootstrap.NavItem eventKey={2} href="#">Link</ReactBootstrap.NavItem>
                        <ReactBootstrap.NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <ReactBootstrap.MenuItem eventKey={3.1}>Action</ReactBootstrap.MenuItem>
                            <ReactBootstrap.MenuItem eventKey={3.2}>Another action</ReactBootstrap.MenuItem>
                            <ReactBootstrap.MenuItem eventKey={3.3}>Something else here</ReactBootstrap.MenuItem>
                            <ReactBootstrap.MenuItem divider/>
                            <ReactBootstrap.MenuItem eventKey={3.3}>Separated link</ReactBootstrap.MenuItem>
                        </ReactBootstrap.NavDropdown>
                    </ReactBootstrap.Nav>
                    <ReactBootstrap.Nav pullRight>
                        <ReactBootstrap.NavItem eventKey={1} href="#">Link Right</ReactBootstrap.NavItem>
                        <ReactBootstrap.NavItem eventKey={2} href="#">Link Right</ReactBootstrap.NavItem>
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Navbar>
        )
    }
});

const LeftMenu = React.createClass({
    render: function () {
        return (
            <ReactBootstrap.ButtonGroup vertical>
                <ReactBootstrap.Button>Button</ReactBootstrap.Button>
                <ReactBootstrap.Button>Button</ReactBootstrap.Button>
                <ReactBootstrap.DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">
                    <ReactBootstrap.MenuItem eventKey="1">Dropdown link</ReactBootstrap.MenuItem>
                    <ReactBootstrap.MenuItem eventKey="2">Dropdown link</ReactBootstrap.MenuItem>
                </ReactBootstrap.DropdownButton>
                <ReactBootstrap.Button>Button</ReactBootstrap.Button>
                <ReactBootstrap.Button>Button</ReactBootstrap.Button>
                <ReactBootstrap.DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
                    <ReactBootstrap.MenuItem eventKey="1">Dropdown link</ReactBootstrap.MenuItem>
                    <ReactBootstrap.MenuItem eventKey="2">Dropdown link</ReactBootstrap.MenuItem>
                </ReactBootstrap.DropdownButton>
                <ReactBootstrap.DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">
                    <ReactBootstrap.MenuItem eventKey="1">Dropdown link</ReactBootstrap.MenuItem>
                    <ReactBootstrap.MenuItem eventKey="2">Dropdown link</ReactBootstrap.MenuItem>
                </ReactBootstrap.DropdownButton>
            </ReactBootstrap.ButtonGroup>
        )
    }
});


const ToolTipMenu = React.createClass({
    render: function () {
        return (
            <ReactBootstrap.ButtonToolbar>
                <ReactBootstrap.OverlayTrigger placement="left" overlay={tooltip}>
                    <ReactBootstrap.Button bsStyle="default">Holy guacamole!</ReactBootstrap.Button>
                </ReactBootstrap.OverlayTrigger>

                <ReactBootstrap.OverlayTrigger placement="top" overlay={tooltip}>
                    <ReactBootstrap.Button bsStyle="default">Holy guacamole!</ReactBootstrap.Button>
                </ReactBootstrap.OverlayTrigger>

                <ReactBootstrap.OverlayTrigger placement="bottom" overlay={tooltip}>
                    <ReactBootstrap.Button bsStyle="default">Holy guacamole!</ReactBootstrap.Button>
                </ReactBootstrap.OverlayTrigger>

                <ReactBootstrap.OverlayTrigger placement="right" overlay={tooltip}>
                    <ReactBootstrap.Button bsStyle="default">Holy guacamole!</ReactBootstrap.Button>
                </ReactBootstrap.OverlayTrigger>
            </ReactBootstrap.ButtonToolbar>
        )
    }
});

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Navigation/>
                <br/>
                <br/>
                <LeftMenu/>
                <br/>
                <br/>
                <ToolTipMenu/>
            </div>
        )
    }
});

var mountNode = document.getElementById('content');
ReactDOM.render(<App/>, mountNode);