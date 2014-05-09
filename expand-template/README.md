# Expand-Template
## Introduction
The expandtemplate script prompts for variables found in a template, then re-prints that template, replacing the variables with your text.

IF a .txt file exists with the same name as the template file, the contents of that file will be displayed (to standard error) before you are prompted for any variables found in the template. This text file can be used to provide some background on the prompts you are about to receive.

The filled out template will be output to standard output,, which you should redirect to a file, or pipe to another command's input.

YOu can use the same variable multiple times - the variable will only be prompted for once. A variable is any text, enclosed in brackets, such as [name] or [subnet]. Variable names are case sensitive.

## Sample Usage
YOu can use the sample template, provided in the sample sub-directory, to get started:
	cd sample
	../expandtemplate sample >output.txt
	cat output.txt

THe sample.txt file is displayed first, then you are prompted to fill out any variables found in the sample template file. THe filled out template is then displayed, and in this case, output to the output.txt file.

