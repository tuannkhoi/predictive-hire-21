import Button from '@mui/material/Button';

interface NavBarElements {
	readonly Products: string[];
	readonly Platform: string[];
	readonly "Why us": string[];
	readonly Resources: string[];
	readonly Blog: string[];
	readonly Contact: string[]
}

const elements: NavBarElements = {
	"Products": ["Chat Interview", "Video Interview", "Group Interview", "Candidate Feedback", "Candidate Insights", "People Insights", "Integration"],
	"Platform": ["Candidate Experience", "Eliminating Bias", "Speed to hire"],
	"Why us": ["The Science", "Successful Customers", "Case Study", "Award Winning", "Featured In"],
	"Resources": ["'Saving Calculator", "Ultimate Guide", "DEI Report", "Fair eBook", "Inclusion eBook", "Experience eBook", "Retail eBook", "Automation eBook", "Other Resources"],
	"Blog": [],
	"Contact": []
};

var menuItems:any = [];
for (var key in elements) {
  	menuItems.push(
		<div>
			<Button style={{color: 'white'}}>
				{key}
			</Button>
		</div>
  	)
}

export default menuItems;

{/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <Button
              sx={{ my: 2, display: 'block' }}
            >
              <NavLink to="/products" style={{color: 'white', textDecoration: 'none'}}>
                Products
              </NavLink>
            </Button>
            <Button
              sx={{ my: 2, display: 'block' }}
            >
              <NavLink to="/platform" style={{color: 'white', textDecoration: 'none'}}>
                Platform
              </NavLink>
            </Button>
            <Button
              sx={{ my: 2, display: 'block' }}
            >
              <NavLink to="/why-us" style={{color: 'white', textDecoration: 'none'}}>
                Why us
              </NavLink>
            </Button>
            <Button
              sx={{ my: 2, display: 'block' }}
            >
              <NavLink to="/resources" style={{color: 'white', textDecoration: 'none'}}>
                Resources
              </NavLink>
            </Button>
            <Button
              sx={{ my: 2, display: 'block' }}
            >
              <NavLink to="/blog" style={{color: 'white', textDecoration: 'none'}}>
                Blog
              </NavLink>
            </Button>
            <Button
              sx={{ my: 2, display: 'block' }}
            >
              <NavLink to="/contact" style={{color: 'white', textDecoration: 'none'}}>
                Contact
              </NavLink>
            </Button>
          </Box> */}