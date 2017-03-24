package calendApp.service;

import calendApp.domain.Location;
/**
* @author Adrian Gross
* @author Julie George
*/
public interface LocationService {
	
	public void createLocation(Location location);
	
	public Location findById(Long locationId);

	public void deleteById(Long locationId);
		
//	public void update(String street, Long locationId);
	
	
}
