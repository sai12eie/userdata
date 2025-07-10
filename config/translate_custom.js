function customizeIdentifier(s) {
	if(s instanceof Object)
		return JSON.stringify(s);
	return s;
}