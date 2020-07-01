from fpdf import FPDF, HTMLMixin
pdf = FPDF()


class CustomPDF(FPDF, HTMLMixin):

    def header(self):
        # Set up a logo
        image_path = "./dotpayapp/static/assets/img/logo.png"
        self.image(image_path, 10, 8, 33)
        self.set_font('Arial', 'B', 15)
        pdf.cell(200, 10, txt="VOLVO XC 90 (YV4A22PLXK1443101)",  ln=1, align="C")

        # Line break
        self.ln(20)

    def footer(self):
        self.set_y(-10)

        self.set_font('Arial', 'I', 8)

        # Add a page number
        page = 'Page ' + str(self.page_no())
        self.cell(0, 10, page, 0, 0, 'C')


pdf = CustomPDF()
pdf.add_page()
pdf.set_font('Times', '', 12)
pdf.set_fill_color(204, 204, 204)
pdf.cell(50, 0, txt="Car Make",border=1, ln=0, fill=True)
pdf.cell(50, 0, txt="VOLVO",border=1, ln=1, fill=True)
html = '''
<!DOCTYPE html>
<html>
<head>
	<title>Report</title>
	<style type="text/css">
		.type-1{
			/*border: 1px solid;*/
			height: 50px;
			font-weight: 800;
			padding-left: 10px;
		}
		.type-2{
			/*border: 2px solid;*/
			padding-left: 10px;
		}
		tr:nth-child(even) {background: #CCC}
		tr:nth-child(odd) {background: #f1f1f1}
	</style>
</head>
<body>
	<table CELLSPACING=0 BORDER=1 width="700">
		<tr>
			<td class="type-1" style="width: 200px">Car Make</td>
			<td class="type-2" style="width: 300px" >VOLVO</td>
		</tr>
		<tr>
			<td class="type-1">Model</td>
			<td class="type-2">XC 90</td>
		</tr>
		<tr>
			<td class="type-1">Color</td>
			<td class="type-2">Navy Blue</td>
		</tr>
		<tr>
			<td class="type-1">Capacity</td>
			<td class="type-2">1969</td>
		</tr>
		<tr>
			<td class="type-1">Origin Country</td>
			<td class="type-2">USA</td>
		</tr>
		<tr>
			<td class="type-1">Engine</td>
			<td class="type-2">Gasoline</td>
		</tr>
		<tr>
			<td class="type-1">Year of prod</td>
			<td class="type-2">2018</td>
		</tr>
		<tr>
			<td class="type-1">VIN</td>
			<td class="type-2">YV4A22PLXK1443101</td>
		</tr>
		<tr>
			<td class="type-1">Milleage</td>
			<td class="type-2">27</td>
		</tr>
		<tr>
			<td class="type-1">Offerd price</td>
			<td class="type-2">196 185 PLN</td>
		</tr>
	</table>
</body>
</html>

    '''
# pdf.write_html(html)
line_no = 1
for i in range(50):
    pdf.cell(0, 10, txt="Line #{}".format(line_no), ln=1)
    line_no += 1

pdf.output("simple_demo.pdf")
