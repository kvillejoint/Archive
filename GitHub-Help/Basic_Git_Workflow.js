In the terminal within your repo folder, follow these steps to commit to your branch and merge to master. You should be creating one branch per feature and merging it to master when that feature is ready to go live. 

1. git status 
	-- this will show you which branch you are on and show if you have any changes that are not committed. 

2. git checkout -b nameofbranch
	-- this will CREATE a new branch

	git checkout nameofbranch
	-- this will NAVIGATE to an already created branch

3. git pull origin master
	-- this will ensure that your branch is in sync with the master. Always do this before you start working. You will want to do this on your feature branch, as well as on your master branch, to ensure that BOTH branches are in sync with the live master. 
	
-----------------------------------------------------------
Work on your file now. Commit to your branch as often as possible. 

If you finish one part of your feature, do a git add ., git commit -m "Change that you made.", git push origin nameofbranch. 

Once you have pushed your changes to your branch, update your branch with the latest changes on master, according to the steps in the first answer of this link: 
https://stackoverflow.com/a/20103414

-----------------------------------------------------------

If you’ve created a fork of the project repo into your own GH, this fork will not automatically update to maintain the changes that live on the project master. To fix this, follow the steps at this link: 
https://stackoverflow.com/a/18830739 