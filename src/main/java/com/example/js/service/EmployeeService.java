package com.example.js.service;
import com.example.js.model.Employee;
import java.util.List;

public interface EmployeeService
{
    void saveEmployee(Employee employee);
    List<Employee> getAllEmployees();
    void deleteEmployee(String id);
}

