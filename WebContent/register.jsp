<%@ page import="java.sql.*"%>

<%
String name = request.getParameter("rname");
String email = request.getParameter("remail");
String gender = request.getParameter("rgender");
String password = request.getParameter("rpass");
String passwordConfirm = request.getParameter("rpassConfirm");
if(password.equals(passwordConfirm)) {
	try{
		Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "bootcamp01", "MyPassword");
		PreparedStatement ps = conn.prepareStatement("INSERT INTO registration VALUES (?,?,?,?)");
		ps.setString(1,name);
		ps.setString(2,email);
		ps.setString(3,gender);
		ps.setString(4, password);
		int x = ps.executeUpdate();
		if(x!=0) {
			out.print("Signup success");
		} else {
			out.print("Signup wrong");
		}
	} catch(Exception e) {
		out.print(e);
	}
} else {
	out.print("Password does not match");
}
%>